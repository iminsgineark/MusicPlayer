FROM nginx

LABEL maintainer="ankurjha4025@gmail.com"
LABEL version="1.0"
LABEL description="A lightweight container for serving static content with NGINX"

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY . .

RUN useradd -m nginxuser
USER nginxuser

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

