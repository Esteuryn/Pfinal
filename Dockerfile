# Utiliza una imagen base de Nginx
FROM nginx:latest

# Copia el archivo HTML al directorio de Nginx
COPY ./index.html /usr/share/nginx/html/index.html