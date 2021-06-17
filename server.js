const express = require('express')//IMPORT EXPRESS
const path = require('path')
const sayhi = require('./sayhi')
const student =  require('./student')
//INVOKE EXPRESS
const app=express()//INITIALISATION EXPRESS ONCREE UNE VARIABLE APP QUI RECOIT EXPRESS
//middleware FOLDER STATIC
app.use(express.static(path.join(__dirname,'public')))
//creating middleware
app.use(sayhi)

// app.use('/api',require('./routes/Students'))
app.get('/student',(req, res)=>{

    res.json(student)
})

//get one student
app.get('/student/:id',(req,res)=>{
    let student = student.filter(student=>student.id===parseInt(req.params.id))
    if(student.length===0){
        res.json({msg:"there is no users with this id" +req.params.id})
    } 
    else{
    res.json(student)
}})

app.listen(5000,(err)=>{   //JE FIXE LE PORT 5000 QUI EST LE 1 PARAMETRE DE APP.LISTEN PUIS CALLBACK FUNCTION
    if(err){
        throw err //SHOW ME THE ERROR
    }
    else{
        console.log('SERVER IS RUNNING ')
    }
})//je dois demarrer le server :node server.js
app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
  });