const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Successfully started a server");
});

server.listen(4000, "localhost", () => {
  console.log("Listening for request");
});
