const bodyParser = require('body-parser')
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 4049;
const http = require('http')
const app = express();
const SocketIOController = require('./app/Controller/socketIOController')
const Home = require('./app/Route/Home')
const Question = require('./app/Route/Question')

const corsOptions = {
    origin: [
      "http://192.168.1.14:8080",
      "http://172.20.1.151:8080",
      "http://192.168.1.14:8080",
      'http://10.20.0.22:8080',
      'http://192.168.253.153:8080',
      'http://localhost:8080/'],
    cors: {
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["gossipCoco"],
      credentials: true
    }
  }

  app
  .use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
  .use(bodyParser.json({ limit: '50mb', extended: true }))
  .use(cors())
  .use('/Home', Home)
  .use('/Question', Question)



  const serv = http.createServer(app);

  serv.listen(PORT, () => {
    SocketIOController(serv, corsOptions)
    console.log(`Server is running on port ${PORT}.`);
  });