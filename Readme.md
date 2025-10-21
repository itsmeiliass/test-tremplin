# TEST-TREMPLIN

## À propos de moi

**Nom :** ILIASS BARGACHE <br />
**Niveau d'étude :** freshement dipolomé BAC +5 / Ingénierie intelligente des systemes d'ifomations et communications <br />
**Durée du stage :** jusqu'au 6 mois selon vos besoins <br />
**École/Université :** École Supérieure de Management de Télécommunication et d’Informatique Sup MTI / freshement dipolomé <br />

---

## Screenshot

![Contact Form Screenshot](./image.png)

---

## Démarrage rapide

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

2. **Démarrer la base de données**

```bash
docker-compose up -d
```

3. **Backend**

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

4. **Frontend**

```bash
cd ../frontend
npm install
npm run dev
```

5. **Accéder à l'application**

```bash
   Ouvrez votre navigateur sur http://localhost:5173
```

---

## Configuration

**Variables d'environnement**

Créez un fichier .env dans le dossier backend :

```bash
PORT=5000
DB_USER=postgres
DB_HOST=localhost
DB_NAME=test_tremplin
DB_PASSWORD=password
DB_PORT=5432
```

---

## Questions & Réponses

**Difficultés rencontrées**
Intégration précise du design : Reproduire exactement le layout de l'image fournie a nécessité une attention particulière aux détails CSS

**Nouveaux outils découverts**
React hot toast - pour l'alerte de Success .

**Choix des outils**

React : Interface utilisateur moderne et réactive
Express : API REST simple et efficace
PostgreSQL : Base de données robuste et relationnelle
Docker : Isolation et reproductibilité des environnements
Vite : Build tool rapide pour le développement

**Utilisation de Docker**

Oui, j'utilise Docker régulièrement pour
Faciliter le déploiement
Isoler les services
