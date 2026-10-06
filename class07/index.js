const express = require('express');
const app = express();
const port = 3000;

app.get('/' ,(req,res) => {
    res.end('hello world');
});
app.get('/about' , (req,res) =>{
    res.end('hello about page')
});

app.get('/contact' , (req,res)=>{
    res.end('hello contact page')
});
app.listen(port , () => {
    console.log(`port is running on ${port}`)
})