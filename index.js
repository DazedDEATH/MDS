//Crear aplicación de express
const express = require('express');
const res = require('express/lib/response');
const { response } = require('express');
//Ejecutar aplicación de express
const app = express()

//Confirmacion del Git Pull 
//path
const path = require('path');

//Definicion del puerto, donde se manipulan las variables de ambiente
const port = process.env.PORT || 3000;


//Primer Commit de la rama de Rivera
//First commit Mendez

//Cambio Final para las ramas de Rivera y Mendez

//Get
app.get('/master',(req,res)=>{
    res.sendFile(path.join(__dirname+'/page.html'))
})

//Puerto Local
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})