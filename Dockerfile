FROM nginx

LABEL maintainer="ankurjha4025@gmail.com"
LABEL version="1.0"
LABEL description="A lightweight container for serving static content with NGINX"

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY . .

RUN mkdir -p /var/cache/nginx /var/run/nginx && \
    chown -R nginxuser:nginxuser /var/cache/nginx /var/run/nginx /usr/share/nginx/html


RUN useradd -m nginxuser
USER nginxuser

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

