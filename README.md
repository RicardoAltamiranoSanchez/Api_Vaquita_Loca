## Instalar las dependencias con npm install y con nodemon es instalar npm install nodemon
## Se debe instalar nodemon directamente en el cmd con modo administrador

## Creando la imagen para docker
## Al final se pone un punto
docker build -t "nombre de la imagen que quieres que tenga" .

## Te debe de dar un id cuando este listo

## confirmar la imagen con 
docker images

## docker images

docker run -it -p 5000:4000  "nombre de la imagen que vas ejecutar" 

## Para ver los programas que tenemos ejecutandonos en contenedor
 
docker ps 

## Para terminar el proceso

docker stop id
 
## Para ver los procesos que hallas ejecutado anteriormente

docker ps -a
