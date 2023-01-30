FROM nginx:alpine
RUN mkdir /app
COPY .output/public /app

COPY nginx.conf /etc/nginx/nginx.conf

