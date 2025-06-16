# Stage de build
FROM node:20-alpine AS builder

WORKDIR /app

# Installation de pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copie des fichiers de configuration
COPY package.json pnpm-lock.yaml .npmrc ./
COPY prisma ./prisma/

# Installation des dépendances
RUN pnpm install --frozen-lockfile

# Copie du reste des fichiers
COPY . .

# Génération du client Prisma
RUN pnpm prisma generate

# Build de l'application
RUN pnpm build

# Stage de production
FROM node:20-alpine AS runner

WORKDIR /app

# Installation de pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copie des fichiers nécessaires depuis le stage de build
COPY --from=builder /app/package.json /app/pnpm-lock.yaml /app/.npmrc ./
COPY --from=builder /app/build ./build
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

# Installation des dépendances de production uniquement
RUN pnpm install --prod --frozen-lockfile

# Variables d'environnement
ENV NODE_ENV=production
ENV PORT=3000

# Exposition du port
EXPOSE 3000

# Commande de démarrage
CMD ["node", "build"] 