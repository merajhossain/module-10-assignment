const fs = require('fs');

exports.CreateFile = ((req, res) => {
    fs.writeFile("demo.txt", "this is demo", () => {
        res.end("File Created");
    })
});