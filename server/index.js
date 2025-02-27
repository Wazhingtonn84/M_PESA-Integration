const express = require("express");

const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const TokenRoute = require("./routes/token");

app.listen(PORT, () => {
  console.log(`Server serving on port ${PORT}`);
});

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Mpesa programming in progress,Time to get paid");
});

app.use("/token", TokenRoute);
