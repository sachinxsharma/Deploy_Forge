const express = require("express");
const { exec } = require("child_process");

const app = express();
app.use(express.json());

app.post("/webhook", (req, res) => {
  console.log("Push detected. Deploying...");
  exec("bash deploy.sh", (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
  });
  res.send("Deploy triggered");
});

app.listen(9000, () => console.log("Webhook running"));
