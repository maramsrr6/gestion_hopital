HôpitalPro — Gestion Hospitalière

Projet DS1 — Développement collaboratif avec Git/GitHub
Esprit School of Business — 2026

 Description du projet

HôpitalPro est un mini-site web statique développé en équipe de 3 étudiants.
Le site permet de gérer les patients, les médecins et les rendez-vous d&#39;un hôpital.

 L&#39;objectif principal est la maîtrise de Git/GitHub et du workflow

collaboratif, pas la complexité du site.

 Membres du groupe
Étudiant GitHub Branches
Maram @maramsrr6 feature-homepage, feature-

navbar

Maryem
kader @maryemkader feature-patients, feature-
footer, feature-formulaire

Maryem
chibani

@meryamch404-
cmyk

feature-medecins, feature-
contact, feature-responsive

 Structure du projet

gestion_hopital/
├── main.html ← Page d&#39;accueil
├── README.md
├── css/
│ └── style.css ← Styles et responsive

├── js/
│ └── main.js ← Interactivité
└── html/
├── patients.html ← Gestion des patients
├── medecins.html ← Liste des médecins
└── contact.html ← Page de contact

 Installation
# 1. Cloner le dépôt
git clone https://github.com/maramsrr6/gestion_hopital.git
# 2. Accéder au dossier
cd gestion_hopital
# 3. Ouvrir dans VS Code
code .
# 4. Ouvrir main.html dans le navigateur

 Stratégie de branches

main
└── develop
├── feature-homepage
├── feature-navbar
├── feature-patients
├── feature-footer
├── feature-medecins
├── feature-contact
├── feature-responsive
├── feature-formulaire
└── conflict-test
Branche Rôle
main Version stable finale
develop Branche d&#39;intégration
feature-xxx Une fonctionnalité par branche

 Commandes Git utilisées

# Configuration
git config --global user.name &quot;Votre Nom&quot;
git config --global user.email &quot;email@esprit.tn&quot;

# Cloner le dépôt
git clone https://github.com/maramsrr6/gestion_hopital.git
# Voir l&#39;état des fichiers
git status
# Créer une nouvelle branche
git checkout -b feature-xxx
# Ajouter les fichiers modifiés
git add .
# Commiter avec un message
git commit -m &quot;feat: description claire&quot;
# Envoyer sur GitHub
git push origin feature-xxx
# Récupérer les dernières modifications
git pull origin develop
# Fusionner une branche
git merge feature-xxx
# Voir l&#39;historique des commits
git log --oneline
# Lister toutes les branches
git branch -a

 Convention des commits

feat: nouvelle fonctionnalité
fix: correction d&#39;un bug
update: mise à jour d&#39;une fonctionnalité
docs: documentation
style: changement de style CSS
Exemples de commits du projet
feat: add complete hospital website with all pages
feat: add responsive navbar with hamburger menu
feat: add patients management page with search
fix: reorganize project structure into css js html folders
fix: correct footer alignment and spacing
fix: resolve merge conflict on main.html title
update: improve homepage layout and typography
docs: update README with project documentation

 Pull Requests

Chaque fonctionnalité a été intégrée via une Pull Request :
PR Titre Branches
#1 feat: add complete hospital website feature-homepage → develop
#2 feat: add responsive navbar feature-navbar → develop
#3 feat: add patients page feature-patients → develop
#4 feat: improve footer feature-footer → develop

 GitHub Issues
# Titre Label
#1 Créer la page patients enhancement
#2 Créer la page médecins enhancement
#3 Ajouter formulaire RDV enhancement
#4 Rendre le site responsive enhancement
#5 Corriger alignement footer bug
#6 Écrire le README complet documentation
#7 Ajouter la page contact enhancement
#8 Tester le site sur mobile bug

 Gestion du conflit Git

Cause du conflit
Deux branches (develop et conflict-test) ont modifié la même
ligne dans main.html simultanément.
 Branche develop → &lt;h1&gt;Système de Gestion Hospitalière — Version
A&lt;/h1&gt;
 Branche conflict-test → &lt;h1&gt;Système de Gestion Hospitalière — Version
B&lt;/h1&gt;
Marqueurs affichés par Git

&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
&lt;h1&gt;Système de Gestion Hospitalière — Version A&lt;/h1&gt;
=======
&lt;h1&gt;Système de Gestion Hospitalière — Version B&lt;/h1&gt;
&gt;&gt;&gt;&gt;&gt;&gt;&gt; conflict-test
Méthode de résolution
# 1. Identifier le conflit
git status
# → both modified: main.html
# 2. Ouvrir main.html dans VS Code
# → Cliquer sur &quot;Accept Current Change&quot; (garder Version A)
# → Supprimer tous les marqueurs
# 3. Sauvegarder Ctrl+S puis finaliser
git add .
git commit -m &quot;fix: resolve merge conflict on main.html title&quot;
git push origin develop
Leçon apprise
Toujours faire git pull origin develop avant de commencer à travailler pour éviter
les conflits avec les modifications des coéquipiers.

 Liens utiles
 Dépôt GitHub : https://github.com/maramsrr6/gestion_hopital
 Project Board : https://github.com/maramsrr6/gestion_hopital/projects

Projet réalisé à Esprit School of Business — Mars 2026