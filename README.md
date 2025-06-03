## PRIMERAMENTE 
- Ejecutar el siguiente comando para instalar todas las dependencias.
  ```bash
    nmp install
  ```
  
## PARA CORRER EL FRONT

- Ejecutar el siguiente comando.
  ```bash
    nmp run dev
  ```

## PARA CREAR LA BASE DE DATOS
- 1 Crear la base de datos en el cql de cassandra con el siguiente comando
  ```bash
    CREATE KEYSPACE IF NOT EXISTS musicdb WITH replication = {
      'class': 'SimpleStrategy',
      'replication_factor': 1
    };
  ```

- 2 Dentro de la direccion del proyecto (Usando cmd o la consola de VScode) usar el siguiente comando para crear las tablas dentro de la base de datos
  ```bash
    node ./src/creates/tables.js
  ```
  
- 3 Usar el siguiente comando para generar los seeders
  ```bash
    node ./src/creates/Seeders.js
  ```
