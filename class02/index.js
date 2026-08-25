const path = require("path");
const os = require("os");
console.log(__dirname);
console.log(__filename);

const filePath = path.join("folders" , "students" , "data.text");
console.log(filePath);

const parseData = path.parse(filePath);
const resolvePath = path.resolve(filePath);
const extname = path.extname(filePath)
const basename = path.basename(filePath);
const dirname = path.dirname(filePath);

console.log({parseData,resolvePath , extname , basename , dirname});

console.log("platform" , os.platform())
console.log("users" , os.userInfo());
console.log("CPU Architecture" , os.arch());
console.log("Free memory" , os.freemem());
console.log("total memory" , os.totalmem());
console.log("system uptime" , os.uptime());
console.log("home directory" , os.homedir());
console.log("cpu info" , os.cpus());
console.log("users" , os.endianness());