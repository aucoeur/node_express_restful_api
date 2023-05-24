# Simple Node express server with Postgres

1. Init git repo
2. Init package.json with `npm init`
3. Create `index.js`
4. Install dependencies: `npm install body-parser express pg`
5. Install dev dependencies: `npm install -D nodemon`
6. Add scripts to `package.json`:
```json
"scripts": {
    "start": "nodemon index.js",
    // ... other scripts
  },
```

7. Create express server & hello world route

## Postgres Setup
8. Create postgres database & setup `db.js`   
    1. Create the DB in postgres using `psql`: 
    ```bash
    $ psql -U username

    postgres=# CREATE DATABASE database_name;
    ```
    -OR-
    ```bash
    $ createdb -U username database_name
    ```
    2. Seed the database with `seed.sql`: 
    ```bash
    $ psql -U username -d database_name -f seed.sql
    ```
 
