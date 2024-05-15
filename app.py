from flask import Flask, request, render_template
from werkzeug.middleware.proxy_fix import ProxyFix
import geoip2.database

app = Flask(__name__, static_folder='images')
app.wsgi_app = ProxyFix(app.wsgi_app, x_for=1, x_proto=1, x_host=1, x_port=1, x_prefix=1)

# Paths to the files storing IPs
VISITORS_FILE = "visitors.txt"
TOTAL_VISITS_FILE = "total_visits.txt"

DB_PATH = 'geoip/GeoLite2-City.mmdb'  # Update with the path to the downloaded GeoLite2 database
reader = geoip2.database.Reader(DB_PATH)


def read_unique_visitors():
    try:
        with open(VISITORS_FILE, 'r') as file:
            return set(file.read().splitlines())
    except FileNotFoundError:
        return set()


def read_total_visits():
    try:
        with open(TOTAL_VISITS_FILE, 'r') as file:
            return int(file.read().strip())
    except (FileNotFoundError, ValueError):
        return 0


def add_unique_visitor(visitor_ip):
    with open(VISITORS_FILE, 'a') as file:
        file.write(f"{visitor_ip}\n")


def increment_total_visits():
    total_visits = read_total_visits()
    with open(TOTAL_VISITS_FILE, 'w') as file:
        file.write(f"{total_visits + 1}\n")


@app.route('/')
def index():
    visitor_ip = request.headers.get('X-Forwarded-For', request.remote_addr)
    unique_visitors = read_unique_visitors()
    total_visits = read_total_visits()

    if visitor_ip not in unique_visitors:
        add_unique_visitor(visitor_ip)
        unique_visitors.add(visitor_ip)

    increment_total_visits()

    count_unique = len(unique_visitors)
    return render_template('index.html', counter_unique=count_unique, counter_total=total_visits + 1)


def get_ip_info(ip_address):
    """Fetch location data for the IP address using the GeoLite2 database."""
    try:
        response = reader.city(ip_address)
        return {
            'city': response.city.name,
            'region': response.subdivisions.most_specific.name,
            'country': response.country.name
        }
    except geoip2.errors.AddressNotFoundError:
        return {}


@app.route('/admin')
def admin():
    unique_visitors = read_unique_visitors()
    visitor_info = [(visitor, get_ip_info(visitor)) for visitor in unique_visitors]
    return render_template('admin.html', visitors=visitor_info)
