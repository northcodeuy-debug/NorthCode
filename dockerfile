# /dockerfile


# ETAPA 1: Construcción
FROM node:22-alpine AS build-step  
WORKDIR /app

# Optimizamos caché: instalamos dependencias primero
COPY package*.json ./
RUN npm install

# Ahora copiamos el código y buildeamos
COPY . .
RUN npm run build

# ETAPA 2: Servidor Nginx liviano
FROM nginx:alpine

# COPY --from=build-step /dist /usr/share/nginx/html
COPY --from=build-step /app/dist /usr/share/nginx/html


# Configuración de Nginx para SPA (Single Page Application)
RUN printf 'server {\n\
    listen 80;\n\
    location / {\n\
        root /usr/share/nginx/html;\n\
        index index.html;\n\
        try_files $uri $uri/ /index.html;\n\
    }\n\
    # Asegura que los assets se sirvan con el MIME type correcto\n\
    location ~ \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {\n\
        root /usr/share/nginx/html;\n\
        include /etc/nginx/mime.types;\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Codigo anterior 15-Abr

# SOLUCIÓN AL ERROR 404: Configuramos Nginx para que siempre mande al index.html
# Esto permite que rutas como /revision funcionen perfecto

# RUN echo 'server { \
#     listen 80; \
#     location / { \
#         root /usr/share/nginx/html; \
#         index index.html; \
#         try_files $uri $uri/ /index.html; \
#     } \
# }' > /etc/nginx/conf.d/default.conf

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]



# ... (Etapa 1) Probar supuestaemte optimisa el cache no se qeu
# WORKDIR /app
# COPY package*.json ./
# RUN npm install  # Esto se queda en cache si no cambias el package.json
# COPY . .         # Solo después de instalar copiamos el resto del código
# RUN npm run build