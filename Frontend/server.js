const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const path = require("path");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// const uploadsDir = path.join(__dirname, "uploads");

// // Ensure the uploads directory exists
// if (!fs.existsSync(uploadsDir)) {
//   fs.mkdirSync(uploadsDir);
// }

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

wss.on("connection", (ws) => {
  console.log("New client connected");

  ws.on("message", (message) => {
    const msg = JSON.parse(message);
    if (msg.type === "file") {
      console.log("Received file");

      // Broadcast the file data to all other clients
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(
            JSON.stringify({
              type: "file",
              data: msg.data,
              filename: msg.filename,
            })
          );
        }
      });
    } else {
      console.log(`Received message: ${msg}`);
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

const PORT = process.env.PORT || 3200;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
