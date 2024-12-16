const express = require("express");
const app = express();
const cors = require("cors");
const { MONGODB_URL, PORT } = require("./config/serverConfig");
const { connectDB } = require("./db/connect");
const authRoute = require("./routes/authRoute");
const uploadImageRoute = require("./routes/uploadImageRoute");

app.use(cors());
app.use(express.json());

app.use("/api", authRoute);
app.use("/api", uploadImageRoute);

async function serverStart() {
  try {
    await connectDB(MONGODB_URL);
    console.log("Connected to database...");
    app.listen(PORT, () => {
      console.log(`Server is live at port : ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

serverStart();
