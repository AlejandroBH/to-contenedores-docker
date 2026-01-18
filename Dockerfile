FROM nginx:alpine

# Copiar archivos HTML al directorio de nginx
COPY index.html /usr/share/nginx/html/

# Configurar nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]