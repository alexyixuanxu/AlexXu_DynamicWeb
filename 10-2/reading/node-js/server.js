//server.js
const http = require('http'),
      url = require('url'),
 
makeServer = function (request,response){
  // The .parse()method takes a url as argument 
  // and breaks it into protocol , host path and querystring
   let path = url.parse(request.url).pathname;
   console.log(path);
   if(path === '/'){
      response.writeHead(200,{'Content-Type':'text/plain'});
      response.write('Hello world');
   }
   else if(path === '/about'){
     response.writeHead(200,{'Content-Type':'text/plain'});
     response.write('About page');
   }
   else if(path === '/blog'){
     response.writeHead(200,{'Content-Type':'text/plain'});
     response.write('Blog page');
   }
   else{
     response.writeHead(404,{'Content-Type':'text/plain'});
     response.write('Error page');
   }
   response.end();
 },
server = http.createServer(makeServer);
server.listen(3000,()=>{
 console.log('Node server created at port 3000');
});