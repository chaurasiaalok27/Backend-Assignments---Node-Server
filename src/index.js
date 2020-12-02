//var http = require("http");

//const httpServer = http.createServer(handleServer);

const express = require('express');
const app = express();
app.get('/welcome',(req,res)=>
{
    res.writeHead(200,{
        'content-type':'text/plain'
    });
    res.write('Welcome to Dominos!');
    res.end();
});

app.get('/contact',(req,res)=>
{
    res.writeHead(200,{
        'content-type':'application/json'
    });
    res.write(
        JSON.stringify({
        phone: "18602100000",
       email: "guestcaredominos@jublfood.com"
      })
    );
    res.end();
});

//function handleServer(req, res) {
  //  if(req.url.startsWith("/welcome") && req.method === 'GET')
    //{
      //  res.writeHead(200,{
        //    'content-type':'text/plain'
        //});
        //res.write('Welcome to Dominos!');
        //res.end();
    //}
    //else if(req.url.startsWith("/contact") && req.method === 'GET')
    //{
     //   res.writeHead(200,{
     //       'content-type':'application/jason'
     //   });
     //   res.write(
     //       JSON.stringify({
     //       phone: '18602100000',
     //      email: 'guestcaredominos@jublfood.com'
       //   })
       // );
        //res.end();
    //}
    //else {
     //   res.writeHead(404,{});
    //    res.end();
    //}
  
//}

app.listen(8081);