# Etapa 1: Construcción
FROM node:18-alpine AS build

WORKDIR /app

# Copiar archivos de configuración
COPY package*.json ./
COPY angular.json ./
COPY tsconfig*.json ./

# Instalar dependencias
RUN npm ci

# Copiar el código fuente
COPY src ./src

# Construir la app para producción
RUN npm run build --prod

# Etapa 2: Servir con Nginx
FROM nginx:alpine

# Eliminar la configuración por defecto de Nginx (opcional)
RUN rm /etc/nginx/conf.d/default.conf

# Copiar los archivos construidos desde la etapa anterior
COPY --from=build /app/dist/tu-proyecto /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]