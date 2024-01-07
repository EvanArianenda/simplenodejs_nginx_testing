const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Successfully started a server");
});

server.listen(4000, "localhost", () => {
  console.log("Listening for request");
});
