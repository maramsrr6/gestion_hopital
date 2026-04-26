FROM nginx:alpine
LABEL maintainer="maramsrr6@esprit.tn"
LABEL description="HopitalPro - DS2"
RUN rm -rf /usr/share/nginx/html/*
COPY main.html /usr/share/nginx/html/index.html
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY html/ /usr/share/nginx/html/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
