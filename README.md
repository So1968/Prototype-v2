# Prototype v2 - Architecture web métier interne

Architecture monorepo simple, propre et extensible pour une application web interne:

- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **Base de données**: PostgreSQL
- **ORM**: Prisma

## Objectifs d'architecture

- Séparer clairement les responsabilités (`apps/frontend`, `apps/backend`, `infra/`).
- Permettre une montée en charge progressive (modules backend, routes versionnées).
- Faciliter le déploiement derrière **Nginx** ou **Apache** via reverse proxy.
- Garder une base claire pour des besoins métier internes (auth SSO, audit, RBAC, etc.).

## Arborescence

```txt
.
├── apps/
│   ├── backend/
│   │   ├── prisma/
│   │   └── src/
│   │       ├── config/
│   │       ├── middleware/
│   │       ├── modules/
│   │       └── routes/
│   └── frontend/
│       └── src/
├── infra/
│   ├── apache/
│   └── nginx/
└── package.json
```

## Démarrage rapide

### 1) Prérequis

- Node.js 20+
- npm 10+
- PostgreSQL 15+

### 2) Variables d'environnement

Copier:

- `apps/backend/.env.example` -> `apps/backend/.env`
- `apps/frontend/.env.example` -> `apps/frontend/.env`

### 3) Installer

Depuis la racine:

```bash
npm install
```

### 4) Préparer la base

```bash
npm run db:generate --workspace @prototype/backend
npm run db:migrate --workspace @prototype/backend
```

### 5) Lancer en développement

```bash
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`

## Déploiement derrière Nginx / Apache

- Exemples de reverse proxy disponibles dans `infra/nginx/app.conf` et `infra/apache/vhost.conf`.
- Le frontend est servi statiquement (build Vite).
- Le backend est exposé via `/api`.

## Évolutions recommandées

- Ajouter un module d'authentification (OIDC/SAML selon SI interne).
- Ajouter une couche de logs structurés (pino/winston) + corrélation de requêtes.
- Introduire des migrations CI/CD et des tests d'intégration par module métier.
