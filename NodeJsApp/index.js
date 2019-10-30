//1. call mysql package
const mysql = require('mysql');

//2. call express package 
const express = require('express');

//3. Call body-parser package
const bodyparser = require('body-parser');

//4. Create a new express app instance (Crear una nuena instancia)
var app = express();

//5. Enable JSON request
app.use(bodyparser.json());

//6. Create Mysql data base connection
var connectionDB = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'market'
});

//7. validate mysql data base connection (validar si se realizo la conexion)
connectionDB.connect((err)=>{
    if(!err){
        console.log('::--Successfull data base connection--::');
    } else {
        console.log('DB Connection dailed \n error: '+JSON.stringify(err, undefined, 2));
    }
    
});

//8. run server
app.listen(3000,()=>console.log('Server is already running at port:3000'));

//9. Get all market data base users
app.get('/list_users',(req,res) => { 
    connectionDB.query('SELECT * FROM users',(err, rows, fields) => {
        if(!err){
            console.log(rows);
            res.send(rows);
        } else {
            console.log(err);
            res.send(rows);
        }
    })
});

//10. Look for an user
app.get('/list_users/:id',(req,res) => { 
    connectionDB.query('SELECT * FROM users WHERE id = ?', [req.params.id],(err, rows, fields) => {
        if(!err){
            console.log(rows);
            res.send(rows);
        } else {
            console.log(err);
            res.send(rows);
        }
    })
});

//11. INSERT/UPDATE

//12. DELETE