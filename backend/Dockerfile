# Utilise une image Node.js
FROM node:22-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier tout le code
COPY . .

# Exposer le port que ton Express écoute
EXPOSE 8000

# Commande pour lancer ton serveur Express
CMD ["npm", "start"]