FROM node:22-alpine

WORKDIR /app

COPY build/ .


# Variables d'environnement
ENV NODE_ENV=production
ENV PORT=3000

# Exposition du port
EXPOSE 3000

# Commande de démarrage
CMD ["node", "index.js"] 