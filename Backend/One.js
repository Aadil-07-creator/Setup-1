var http = require('http');
var fs = require('fs');
http.createServer((req,res) =>
    {
        //fs.readFile('two.txt',(err,data)=>
        fs.unlink('two.txt',(err)=>
        {
            if(err) throw err;
            console.log("file is deleted")

        
        //res.write(data);
        //res.end();
        });
        console.log('server started')
    }).listen(3000)