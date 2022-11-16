//Crear aplicación de express
const express = require('express');
const res = require('express/lib/response');
//Ejecutar aplicación de express
const app = express()
//Definicion del puerto, donde se manipulan las variables de ambiente
const port = process.env.PORT || 3000;


//Primer Commit de la rama de Rivera
//First commit Mendez

//Cambio Final para las ramas de Rivera y Mendez

//Get
app.get('/master',(req,res)=>{
    res.send('Inicial')
})

//Puerto Local
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})