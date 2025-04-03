const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, "404.html");
  let statusCode = 404;

  if (req.url === "/") {
    filePath = path.join(__dirname, "index.html");
    statusCode = 200;
  } else if (req.url === "/about") {
    filePath = path.join(__dirname, "about.html");
    statusCode = 200;
  } else if (req.url === "/contact-me") {
    filePath = path.join(__dirname, "contact-me.html");
    statusCode = 200;
  }

  fs.readFile(filePath, (err, content) => {
    res.writeHead(statusCode, { "Content-Type": "text/html" });
    res.end(content);
  });
});

server.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});
