const express = require('express')
const app = express()
const mysql12= require('mysql2')
const mysql_config = require('./mysql_config')


app.listen(3001, () =>{

console.log('serv no ceu igual teu pai')

})


//const conection = mysql12.createConnection(mysql_config)

app.get('/', (req,res)=>{


res.send('oi')



})