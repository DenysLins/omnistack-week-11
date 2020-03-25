# OmniStack Week 11 - Be the Hero

## This is my solution code for [OmniStack Week 11.0](https://rocketseat.com.br/week/aulas/11.0)

### Prerequisites

* docker-compose

### How to run

TO run in your local machine, first create a database (db.sqlite) file. Run the following command inside the backend folder:

```sh
npm install
npx knex migrate:latest
```
To run containers for frontend in development mode, frontend in production mode and the backend, run the following command inside the aulas folder:

```sh
cd aulas
docker-compose up
```

To access the fronted in dev mode visit <http://localhost:3000>.

To access the frontend in prod mode visit <http://localhost:3001>

To access the backend visit <http://localhost:3333/health>
