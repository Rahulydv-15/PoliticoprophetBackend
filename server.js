import express from "express";
import mongoose from "mongoose";
import articleRoutes from "./routes/index.js";
import cors from "cors";
const app = express();
const PORT = 3000;
app.use(cors());
mongoose
  .connect("mongodb+srv://rahulyadav:BABABHOLA015@cluster0.3bfwndc.mongodb.net/politicoProphetDB", { family: 4 })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(`Unable to connect to MongoDB: ${err}`));

app.use(express.json());

app.use("/api", articleRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
