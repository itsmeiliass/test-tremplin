# TEST-TREMPLIN

## 👤 À propos de moi

**Nom:** ILIASS BARGACHE
**Niveau d'étude:** freshement dipolomé BAC +5 / Ingénierie intelligente des systemes d'ifomations et communications .
**Durée du stage:** jusqu'au 6 mois selon vos besoins
**École/Université:** École Supérieure de Management de Télécommunication et d’Informatique Sup MTI / freshement dipolomé

---

## 📸 Screenshot

![Contact Form Screenshot](./screenshot.png)

---

## 🚀 Démarrage rapide

### Prérequis

- Node.js (v16 ou supérieur)
- Docker et Docker Compose
- PostgreSQL
- npm

### Installation

1. **Cloner le repository**

```bash
git clone https://github.com/itsmeiliass/test-tremplin

```

Démarrer la base de données

docker-compose up -d

Backend

cd backend
npm install
cp .env.example .env
npm run dev

Frontend

cd ../frontend
npm install
npm run dev

Accéder à l'application
Ouvrez votre navigateur sur http://localhost:5173

Configuration
Variables d'environnement

Créez un fichier .env dans le dossier backend :

PORT=5000
DB_USER=postgres
DB_HOST=localhost
DB_NAME=realestate
DB_PASSWORD=password
DB_PORT=5432

Questions & Réponses
Difficultés rencontrées
Intégration précise du design : Reproduire exactement le layout de l'image fournie a nécessité une attention particulière aux détails CSS

Nouveaux outils découverts
React hot toast - pour l'alerte de Success .

Choix des outils

React : Interface utilisateur moderne et réactive
Express : API REST simple et efficace
PostgreSQL : Base de données robuste et relationnelle
Docker : Isolation et reproductibilité des environnements
Vite : Build tool rapide pour le développement

Utilisation de Docker

Oui, j'utilise Docker régulièrement pour
Faciliter le déploiement
Isoler les services
