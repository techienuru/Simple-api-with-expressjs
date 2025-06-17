import express from "express";
import router from "./routes/items.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
const PORT = 3500;

app.use(express.json());
app.use("/items", router);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
