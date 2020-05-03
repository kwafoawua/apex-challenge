# Apex Challenge

## Solución

El server está implementado con nodeJS y consiste de las siguientes dependencias:
 - Axios. Para hacer fetch del site de Tarjeta Naranja.
 - Cors. Soluciona el conflicto de cors de Angular.
 - Cheerio. Librería de de jQuery para el server utilizada para parsear el html y acceder a través de selectors.
 - ExpressJS. Framework para el server.

El cliente está implementado de manera básica con Angular.

El json se guarda cada 10 minutos. Desde el cliente se hace la llamada al server para poder obtener la lista de preguntas y respuestas de la sección de Preguntas Frecuentes que está guardada en el archivo faq.json.

## Instalación

Para tener la app de manera local ejecutar los siguientes comandos: 

```bash
$ git clone https://github.com/kwafoawua/apex-challenge.git
```

### Server
Instalar dependencias

```bash
$ cd apex-challenge
$ cd server
$ npm install
```
Para iniciar el server
```bash
$ npm start
```
El server se levanta en `http://localhost:3000`

### Client

Instalar dependencias

```bash
$ cd apex-challenge
$ cd client
$ npm install
```
Para iniciar el server
```bash
$ ng serve --open
```
El client se levanta en `http://localhost:4200`
