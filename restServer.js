const http = require('http');
const fs = require('fs').promises;


const host1 = http.createServer(async (req,res)=>{
    try{
        if(req.method === 'GET'){
        } else if(req.method === 'POST'){
        } else if(req.method === 'PUT'){
        } else if(req.method === 'DELETE'){
        } else {
            res.writeHead(400);
            return res.end("NOT FOUND");
        }
        const data = await fs.readFile('./server2.html');
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        res.end(data);
    } catch(error){
        console.error(error)
        res.writeHead(500, {'Content-Type':'text/html; charset=utf-8'});
        res.end(error.message);
    }
})

host1.listen(8080);

host1.on('listening',()=>{
    console.log('8080번 포트에서 서버 대기 중입니다.');
});

host1.on('error',(error)=>{
    console.error(error);
});