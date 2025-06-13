import express from "express";
import router from "./routers/items.js";

const app = express();
const PORT = 3500;

app.use("/items", router);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.all("/*any", (req, res) => {
  res.status(404).send("The page you are requesting doesn't exist");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: https://localhost:${PORT}`);
});
