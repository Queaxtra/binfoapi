import express from "express";
import info from "./routers/info";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Info Router: /info" });
});

app.use("/info", info);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
