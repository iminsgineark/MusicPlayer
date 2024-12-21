FROM nginx

LABEL maintainer="ankurjha4025@gmail.com"
LABEL version="1.0"
LABEL description="A lightweight container for serving static content with NGINX"

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY . .

# RUN groupadd -g 10001 nginx-user && \
#     useradd -u 10000 -g nginx-user -M -s /sbin/nologin nginx-user && \
#     mkdir -p /var/cache/nginx /var/run/nginx /tmp && \
#     chown -R nginx-user:nginx-user /usr/share/nginx/html /var/cache/nginx /var/run/nginx /tmp && \
#     chmod -R 777 /etc/nginx/conf.d

# RUN sed -i 's/listen\s*80;/listen 8080;/' /etc/nginx/conf.d/default.conf

# USER nginx-user

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

