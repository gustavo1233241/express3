const { error } = require('console')
const express = require('express')
const { get } = require('http')

const app = express()

const mysql12= require('mysql2')
const send = require('send')


app.listen(3001, () =>{

console.log('serv no ceu igual teu pai')

})


const conection = mysql12.createConnection({


host: 'localhost',
user: 'user_bd_tasks',
password: 'QL0P4TDcQGB2R97Djet7vXYHggatTZE4',
database: 'nodejs_tasks'



})

conection.connect(erro =>{


if(erro){

console.log('Erro no sql ' + erro.message)
return;
}

console.log('Conexão estabelecida')






})

app.get('/', (req, res)=>{



conection.query('SELECT * FROM tasks', (err, results,fields)=>{


    if(err){


        console.log(err.message)
        res.send('Erro ao obter a lista')
    }
    else{

        res.send(results)
    }
})


})