const fs = require('fs');

exports.CreateFile = ((req, res) => {
    fs.writeFile("demo.txt", "hello world", () => {
        res.end("File Created");
    });
});