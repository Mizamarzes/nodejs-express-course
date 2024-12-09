const http = require("node:http");
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf8");

  if (req.url === "/") {
    res.end("Bienvenido a mi página de inicio");
  } else if (req.url === "/imagen-banana") {
    fs.readFile('./banana.jpg', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1> 500 Internal Server Error </h1>')
      } else {
        res.setHeader('Content-Type', 'image/jpg')
        res.end(data)
      }
    })
  } else if (req.url === '/Contacto') {
    res.end('<h1>Contacto</h1>');
  } else {
    res.statusCode = 404
    res.end('<h1> 404 NOT FOUND </h1>')
  }
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`);
});
