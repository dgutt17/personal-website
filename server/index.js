const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '..', 'public')))

const PORT = 1337;

app.listen(PORT, ()=>{
    console.log(`You are listening on Port ${PORT}`)
})