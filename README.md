# Music.fy
> Una pagina web en donde puedes buscar y encontrar nuevas recomendaciones de música.

## TECNOLOGIAS USADAS
- Frontend
  - React

- Backend
  - Node.js

- Base de datos
  - Apache Cassandra

## NECESARIO
Tener Cassandra y Nodejs en el equipo, luego de clonar el repositorio en el directorio de tu preferencia, ejecutar el siguiente comando en dicha direccion para instalar todas las dependencias.
  ```bash
    npm install
  ```

## PASO 1: MIGRAR LA BASE DE DATOS
Luego de asegurarte de tener todo instalado se debe:

1. Crear la base de datos en el cql de cassandra con el siguiente comando
  ```bash
    CREATE KEYSPACE IF NOT EXISTS musicdb WITH replication = {
      'class': 'SimpleStrategy',
      'replication_factor': 1
    };
  ```

2. Dentro de la direccion del proyecto (Usando cmd o la consola de VScode) usar el siguiente comando para migrar las tablas hacia la base de datos
  ```bash
    node ./src/creates/tables.js
  ```
  
3. Usar el siguiente comando para generar los seeders
  ```bash
    node ./src/creates/Seeders.js
  ```

  
## PASO 2: EJECUTAR SERVIDOR DEL BACK
Una vez se tenga la base de datos creada en Cassandra, ejecutar el servidor con el siguiente comando:
  ```bash
    npm run server.js
  ```

## PASO 3: EJECUTAR SERVIDOR DEL FRONT
Abriendo una nueva terminal y sin cerrar el servidor del back, ejecuta el siguiente comando:
  ```bash
    npm run dev
  ```
Ingresa en el link y te direccionara a la pagina de Music.fy