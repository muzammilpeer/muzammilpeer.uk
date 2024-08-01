# Use the official Nginx image from Docker Hub
FROM nginx:alpine

# Copy static HTML files from your local directory to the Nginx HTML directory
COPY ./static /usr/share/nginx/html

# Copy custom Nginx configuration to the container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the outside world
EXPOSE 8002

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]