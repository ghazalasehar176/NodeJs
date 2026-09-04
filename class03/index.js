const fs = require("fs");

fs.writeFile("example.txt" , "this is the file " , (err) => {
    if(err){
        console.error("file not created " , err);
    }
    console.log("File created");
})

 fs.readFile("example.txt" , "utf8" ,  (err , data) => {
    if(err) {
        console.error("file error" , err);
    }
    else{
        console.log(data)
    }
});

fs.appendFile("example.txt" , "\nthis is the sec line" , (err) => {
    if(err){
        console.error("file error" , err);
    }
    else{
        console.log("file updated");
    }
})

fs.unlink("index.html" , (err) => {
    if(err){
        console.log("file error" , err);
    }
    else{
        console.log("file deleted");
    }
})