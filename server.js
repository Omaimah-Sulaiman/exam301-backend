const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors');
const axios = require('axios');
const {getFlowersData,updataFlower,getFlowerFav,addFlower,deleteFlowerFav}=require('./controller/flower')
require('dotenv').config();
app.use(cors());
app.use(express.json());

const PORT=process.env.PORT ;

const mongoose = require("mongoose");
const db = require("./models");
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });


app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
})

app.get('/flowersData',getFlowersData)
app.post('/flowers',addFlower)
app.get('/flowersFa',getFlowerFav)
app.get('/deleteFA/:id',deleteFlowerFav)
app.get('/updataFa/:id',updataFlower)


 
app.listen(PORT) // kick start the express server to work