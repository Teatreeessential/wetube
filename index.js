import express from  "express";
const app = express();
const PORT = 4000;

const handleListening = () =>{console.log(`Listening on: http://localhost:${PORT}`);}

app.listen(PORT,handleListening);

app.get('/',function(req,res){
    res.send('hello fuck you');
})
