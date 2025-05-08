# Použijte Node.js image pro build
FROM node:18-alpine as build

# Nastavení pracovního adresáře v kontejneru
WORKDIR /app

# Kopírování package.json a package-lock.json
COPY package*.json ./

# Instalace závislostí
RUN npm install

# Kopírování zdrojového kódu aplikace
COPY . .

# Build frontend aplikace
RUN npm run build

# Použijte Nginx image pro spuštění aplikace
FROM nginx:alpine

# Kopírování buildnutých souborů do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expozice portu 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
