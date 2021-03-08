const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.get('/',(req,res) =>{
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./pages/index.html',(err,data)=>{
        if(err){
            console.log('zhal');
        }else{
            res.write(data);
            res.end();
        }
    })
})

app.listen(port,()=>{
    console.log('Listening on on port')
})