import "doenv/config";
import { aiTools } from "./tools/aiTools";
import cors from "cors";
import express, { Request, Response } from "express";
import { openai } from "./config/openai-config";

const app = express();

app.use(
  cors({
    origin: "",
    credentials: true,
  })
);

app.use(express.json());

app.post("/api/ask", async (request: Request, response: Response) => {
  console.log("Received request:", request.body);
  const message = request.body;

  try {
    const completion = await openai.responses.create({
      model: "gpt-4o",
      instructions:
        "When responding, only state which tool function you would use and why.",
      tools: aiTools,
      input: message,
    });

    console.log(completion);
    response.json(completion);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(4986, () => {
  console.log("Server is listening on Port: 4986");
});
