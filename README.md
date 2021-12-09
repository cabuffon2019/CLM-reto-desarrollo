# reto-desarrollo

## Tecnologias

Koa 2 RESTful API using :

* Koa 2
* Mongodb + Mongoose
* Babel
* Asynchronous Functions (Async/Await)

### Instalación (Manual)

#### Requisitos

* Necesita mongodb instalado y ejecutándose en su computadora o alternativamente puede usar docker

```bash
git clone https://github.com/cabuffon2019/CLM-reto-desarrollo.git
cd CLM-reto-desarrollo
npm install
npm run build
npm start
```
### Instalación con docker-compose

```bash
git clone https://github.com/cabuffon2019/CLM-reto-desarrollo.git
cd CLM-reto-desarrollo
docker-compose up
```

### Información del proyecto 
<li>El endpoint Buscador de peliculas en BD Mongo por Id contiene un metodo GET http://localhost:3000/api/movies/:id
que recibe un id como variable.
<li>El endpoint que almacena una pelicula en BD Mongo contiene un metodo POST http://localhost:3000/api/movies
<li>El endpoint que obtiene todas las peliculas en BD Mongo contiene un metodo GET http://localhost:3000/api/movies
<li>El endpoint que busca una pelicula en BD Mongo por Id, que recibe un BODY para reeemplazar el campo PLOT, contiene un metodo 
POST http://localhost:3000/api/movies/:id

### BODY EJEMPLO
```BODY EJEMPLO
{
    "title": "Guardians of the Galaxy Vol. 1",
    "year": "2017",
    "released": "05 May 2017",
    "genre": "Action, Adventure, Comedy",
    "director": "James Gunn",
    "actors": "Chris Pratt, Zoe Saldana, Dave Bautista",
    "plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
    "ratings": [
        {
            "source": "Internet Movie Database",
            "value": "7.6/10"
        },
        {
            "source": "Rotten Tomatoes",
            "value": "85%"
        },
        {
            "source": "Metacritic",
            "value": "67/100"
        }
        ]
}

{
    "movie": "star wars", 
    "find": "dealing", 
    "replace": "CLM Dev" 
}