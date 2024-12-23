FROM nginx:alpine

LABEL maintainer="ankurjha4025@gmail.com"
LABEL version="1.0"
LABEL description="A lightweight container for serving static content with NGINX"

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY . /usr/share/nginx/html/

RUN chown -R nginx:nginx /usr/share/nginx/html /etc/nginx/nginx.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
