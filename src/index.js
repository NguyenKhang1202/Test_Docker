const express = require("express");

// Constants
const PORT = process.env.PORT || 5000;

// App
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World jenkins");
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
