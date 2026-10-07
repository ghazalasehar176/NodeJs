/* Middleware ek beech ka function hota hai jo Request aur Response ke darmiyan chalta hai.

Flow:

User Request
     ↓
Middleware  ← request ko check/process karta hai
     ↓
Route
     ↓
Response */


const express = require('express');
const app = express();
const port = 3000


//app level middleware:
//request kisi bhi route (/, /about, /contact) par aaye, middleware pehle chalega.
/* app.use((req,res,next) => {
    console.log("app level middleware");
    next();
})
 */

//Custom Middleware = apna khud ka middleware function banana, jo kisi specific kaam ke liye use ho.
app.use(express.json());
function login(req, res, next){
    console.log("custome middleware");
    next();
}

app.get('/' , (req,res) => {
    res.send('hello world');
})
app.get('/profile' , (req,res) =>{
    res.send('hello profile');
})
app.get('/about' , login, (req,res) =>{
    res.send('hello About page');
})
app.get('/contact' , (req, res) => {
    res.send('hello contact');
})


app.listen(port , () => {
    console.log(`app is runing on port ${port}`)
})


