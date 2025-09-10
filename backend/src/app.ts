import cors from "cors";
import express from "express";

const app = express();

app.use(
  cors({
    origin: "",
    credentials: true,
  })
);

app.use(express.json());

app.listen(4986, () => {
  console.log("Server is listening on Port: 4986");
});
