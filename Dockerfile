FROM bitnami/nginx:latest

LABEL maintainer="ankurjha4025@gmail.com"
LABEL version="1.0"
LABEL description="A lightweight container for serving static content with NGINX"

USER root

WORKDIR /app

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./html /usr/share/nginx/html

RUN chmod -R 775 /app & \
    chown -R 1001:0 /app

EXPOSE 8080

USER 1001

CMD ["nginx", "-g", "daemon off;"]

