import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import A_router from "./routes/route.js";

const url =
  "mongodb://127.0.0.1:27020,127.0.0.1:27021,127.0.0.1:27022/saitama?replicaSet=m101";

const app = express();
mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => console.log("connected to db"))
  .catch((err) => {
    console.log("Failed to connect to db", err);
    process.exit(1);
  });
const con = mongoose.connection;
con.on("open", () => {
  console.log("connected...");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", A_router);
app.listen(9000, () => {
  console.log("Server started");
});
