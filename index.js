const app = require("./src/app");
const http = require("http");
const hostname = 'localhost';
const port = 5500;


const httpServer = http.createServer(app)


httpServer.listen(port, hostname, () => {
    console.log(`App run on ${hostname} port ${port}`);
})
