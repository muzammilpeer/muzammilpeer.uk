# muzammilpeer.uk

pip install Flask
pip install gunicorn
pip install geoip2
pip install Werkzeug
pip freeze > requirements.txt

# remove all pip
pip freeze | xargs pip uninstall -y
pip list



 flask run --host=0.0.0.0 --debug -p 8002 