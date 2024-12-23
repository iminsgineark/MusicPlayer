FROM nginx:alpine

LABEL maintainer="ankurjha4025@gmail.com"
LABEL version="1.0"
LABEL description="A lightweight container for serving static content with NGINX"

COPY . /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
