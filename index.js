const express = require("express");
const app = express();
var http = require("http").createServer(app);
const io = require("socket.io")(http);
const path = require('path')

io.on("connection", function (socket) {
  socket.on("chat message", function (msg) {
    console.log("message: " + JSON.stringify(msg));
    io.emit("chat message", msg);
  });
});
app.use(express.static(path.join(__dirname, "./build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
const PORT = process.env.PORT || 7000;
http.listen(PORT, () => {
  console.log(`listening on *:7000`);
});
