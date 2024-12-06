const http = require("http");

const server = http.createServer((req, res) => {
  const resMessage = "I am a Ninja";
  res.write(resMessage);
  res.end();
});

server.listen(8000, () => {
  console.log("server is listening at port 8000");
});

module.exports = server;
