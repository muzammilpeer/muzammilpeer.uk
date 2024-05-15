# Description: Dockerfile for the Flask app
FROM python:3.12-alpine
ADD . /app
WORKDIR /app
RUN pip install --no-cache-dir -r requirements.txt
CMD ["gunicorn", "-b", "0.0.0.0:8002", "app:app"]
