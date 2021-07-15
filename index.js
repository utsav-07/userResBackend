const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex =  require('knex');
const submitForm = require('./controllers/submitForm');
const getAllDetails = require('./controllers/getAllDetails');

const app = express();

app.use(bodyParser.json());
app.use(cors());


const db = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'project1'
    }
  });


app.get('/', (req ,res) => {
    res.send("utsav")
})


app.post('/submitForm' , (req ,res) => submitForm.handleSubmitForm(req , res ,db))  
app.get('/getAllDetails' , (req ,res) => getAllDetails.handleGetAllDetalis(req , res ,db)) 




app.listen(3001)

