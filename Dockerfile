# Dockerfile pour le projet HôpitalPro : déploiement d'une application web statique avec Nginx
# Image de base légère nginx:alpine
FROM nginx:alpine

# Métadonnées
LABEL maintainer="maramsrr6@esprit.tn"
LABEL description="HôpitalPro - Gestion Hospitalière DS2"
LABEL version="1.0"

# Supprimer la configuration nginx par défaut
RUN rm -rf /usr/share/nginx/html/*

# Copier tous les fichiers du site dans le conteneur
COPY main.html /usr/share/nginx/html/index.html
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY html/ /usr/share/nginx/html/html/

# Exposer le port 80
EXPOSE 80

# Démarrer nginx en foreground
CMD ["nginx", "-g", "daemon off;"]
