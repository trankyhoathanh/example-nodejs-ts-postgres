# example-nodejs-ts-postgres

1. Change your config
 + ormconfig.json :
    "host": "host.abc.com",
    "port": 5432,
    "database": "dbpostgres",
    "username": "userpostgres",
    "password": "passwordpostgres",
 + app.ts => port : 3000 or anything

2. npm i (get all node_modules)

3. Run : 
 + Local nodemon : npm run dev
 + Debug : Launch Debug with config
    {
      "version": "0.2.0",
      "configurations": [
        {
          "type": "node",
          "request": "launch",
          "name": "Launch Program Debug Default",
          "program": "${workspaceFolder}/dist/app.js",
          "preLaunchTask": "tsc: build - tsconfig.json",
          "outFiles": ["${workspaceFolder}/out/**/*.js"]
        }
      ]
    }
  + npm start : default

4. Test : 
 + http://localhost:3000/v1/information/insert (to insert one user)
 + http://localhost:3000/v1/information/list (to get list users)