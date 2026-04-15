# /dockerfile


# ETAPA 1: Construcción
FROM node:22-alpine AS build-step  
# FROM node:18-alpine AS build-step # <!> Para sacar 

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ETAPA 2: Servidor Nginx liviano
FROM nginx:alpine
# Vite genera los archivos en /dist

# COPY --from=build-step /dist /usr/share/nginx/html
COPY --from=build-step /app/dist /usr/share/nginx/html


# SOLUCIÓN AL ERROR 404: Configuramos Nginx para que siempre mande al index.html
# Esto permite que rutas como /revision funcionen perfecto
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



# ... (Etapa 1) <!>Probar supuestaemte optimisa el cache no se qeu 
# WORKDIR /app
# COPY package*.json ./
# RUN npm install  # Esto se queda en cache si no cambias el package.json
# COPY . .         # Solo después de instalar copiamos el resto del código
# RUN npm run build