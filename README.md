# HopitalPro - Gestion Hospitaliere

## Description
Mini site web statique developpe en equipe, containerise avec Docker pour le DS2.

## Membres du groupe
- Maram (@maramsrr6)
- Maryem Kader (@maryemkader)
- Maryem Chibani (@meryamch404-cmyk)
- Cyrine

## Prerequis Docker
- Docker version 24.0 ou superieure
- Docker Compose version 2.20 ou superieure

Verifier l installation :
docker --version
docker compose version

## Lancer le projet

### Avec Docker simple
docker build -t hopitalpro .
docker run -d -p 8080:80 hopitalpro
Ouvrir : http://localhost:8080

### Avec Docker Compose
docker compose up -d
Ouvrir : http://localhost:8080

## Structure du projet
gestion_hopital/
├── main.html
├── css/style.css
├── js/main.js
├── html/
│   ├── patients.html
│   ├── medecins.html
│   └── contact.html
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
└── .github/workflows/ci.yml
