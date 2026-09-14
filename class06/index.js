const http =  require("http");
const fs = require("fs");
const port = 3000;


const server = http.createServer((req,res) => {

    if(req.url === "/"){
        res.setHeader("Content-Type" , "text/plain");
        res.write("Home Page");
        res.end();
    }
    else if(req.url === "/userapi") {
        fs.readFile(`${__dirname}/jsonData/userApi.json` , "utf-8" , (err , data) => {
            if(err) {
                res.writeHead(500,{"Content-Type": "text/plain"});
                res.end("internal server error");
            }
            else{
                res.writeHead(200,{"Content-Type": "Application/json"});
                res.end(data);
            }
        });
    }
});

server.listen(port , () => {
    console.log(`server is running on port: ${port}`);
});