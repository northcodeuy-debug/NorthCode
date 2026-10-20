# =============================================================================
# ETAPA 1: Construcción de la Aplicación (Build Stage)
# =============================================================================
FROM node:22-alpine AS build-step
WORKDIR /app

# Optimización de caché en capas: solo reinstala si cambia el package.json
COPY package*.json ./
RUN npm install

# Copia el código fuente y genera el bundle optimizado en /app/dist
COPY . .
RUN npm run build

# =============================================================================
# ETAPA 2: Servidor NGINX Liviano de Alto Rendimiento (Runtime Stage)
# =============================================================================
FROM nginx:alpine

# Limpieza estricta de archivos y configuraciones base
RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/default.conf

# Copia los archivos estáticos compilados desde la etapa de build
COPY --from=build-step /app/dist /usr/share/nginx/html

# Configuración NGINX optimizada para SPA, compresión Gzip y caché estático
RUN printf 'server {\n\
    listen 80;\n\
    server_name localhost;\n\
\n\
    # 1. Enrutamiento SPA (React Router / HTML5 History Mode)\n\
    location / {\n\
        root /usr/share/nginx/html;\n\
        index index.html;\n\
        try_files $uri $uri/ /index.html;\n\
    }\n\
\n\
    # 2. Caché inmutable para assets generados por Vite (JS, CSS, Imágenes)\n\
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {\n\
        root /usr/share/nginx/html;\n\
        expires 1y;\n\
        add_header Cache-Control "public, max-age=31536000, immutable";\n\
    }\n\
\n\
    # 3. Compresión Gzip para velocidad de carga\n\
    gzip on;\n\
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;\n\
}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]