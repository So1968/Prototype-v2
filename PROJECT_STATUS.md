# Suivi d’avancement du projet

## Contexte
Ce dépôt est actuellement minimal (aucun code applicatif, seulement les fichiers Git de base). Le présent document sert de journal de progression obligatoire pour garantir une évolution incrémentale, non destructive et traçable.

## Journal des étapes

### Étape 1 — Mise en place du cadre de progression (2026-04-10)

#### Ce qui a été décidé
- Adopter une stratégie d’évolution **non destructive** : ajouts progressifs, refactorings ciblés, et préservation de l’existant fonctionnel.
- Maintenir un document unique de suivi d’avancement à la racine du dépôt (`PROJECT_STATUS.md`) pour centraliser l’historique des décisions techniques.
- Privilégier des choix simples, standards et maintenables (principe de sobriété).

#### Ce qui a été créé
- `PROJECT_STATUS.md` (ce document), avec une structure stable pour documenter chaque étape importante.

#### Ce qui a été modifié
- Aucun fichier existant n’a été modifié à cette étape.

#### Ce qui a été laissé inchangé
- L’état initial du dépôt (structure Git minimale) est conservé.

#### Ce qui reste à faire
- Définir le périmètre fonctionnel initial du projet (MVP).
- Poser la structure technique minimale nécessaire en restant sobre.
- Ajouter les premières briques fonctionnelles avec validation incrémentale.
- Mettre à jour ce document à chaque jalon significatif.

#### Points de vigilance
- Éviter toute réécriture globale prématurée.
- Vérifier systématiquement l’impact des changements avant intégration.
- Conserver une traçabilité explicite des arbitrages techniques.

#### Dettes techniques éventuelles
- Aucune dette technique identifiée pour l’instant (dépôt encore à l’état initial).

#### Hypothèses encore ouvertes
- Nature exacte du produit à construire (web, API, CLI, hybride).
- Stack cible (à choisir selon le besoin réel, sans surdimensionnement).
- Contraintes de déploiement et d’exploitation.


### Étape 2 — Validation de la stack cible (2026-04-10)

#### Ce qui a été décidé
- Confirmer une stack sobre et standard pour accélérer le démarrage: **React + Vite + React Router** côté frontend, **Node.js + Express** côté backend, **PostgreSQL + Prisma** pour la donnée.
- Encadrer l’authentification avec deux options maintenables: **session sécurisée** ou **JWT + refresh token**, avec hash des mots de passe via **bcrypt**.
- Fixer un principe de simplicité: éviter toute surcouche prématurée, privilégier lisibilité et maintenabilité.

#### Ce qui a été créé
- Aucun nouveau fichier.

#### Ce qui a été modifié
- `README.md` enrichi avec une section explicite “Stack recommandée (validée)” et les principes de déploiement.

#### Ce qui a été laissé inchangé
- La structure monorepo et les choix d’infrastructure déjà posés (reverse proxy Apache/Nginx, séparation frontend/backend/infra).

#### Ce qui reste à faire
- Implémenter les squelettes applicatifs `apps/frontend` et `apps/backend` cohérents avec cette stack.
- Trancher le mode d’authentification final (session ou JWT) selon les contraintes d’exploitation.
- Ajouter les premiers endpoints backend et écrans frontend du MVP.

#### Points de vigilance
- Ne pas introduire de complexité technique tant que le besoin métier n’est pas démontré.
- Vérifier tôt les exigences sécurité (cookies sécurisés, rotation refresh token, politique de mot de passe).

#### Dettes techniques éventuelles
- Décision d’authentification encore ouverte: nécessite un arbitrage explicite avant implémentation complète.

#### Hypothèses encore ouvertes
- Topologie de production exacte (PostgreSQL dédié vs co-hébergé).
- Besoin réel de Tailwind (non prioritaire à ce stade).

## Règles de mise à jour de ce document
- Mettre à jour ce fichier à chaque étape importante.
- Décrire explicitement : décisions, créations, modifications, inchangés, reste à faire, vigilance, dettes, hypothèses.
- En cas de proposition technique atypique/complexe, documenter la demande d’autorisation préalable avant intégration.
