const express = require("express");
const app = express();
const cors = require("cors");
const { MONGODB_URL, PORT } = require("./config/serverConfig");
const { connectDB } = require("./db/connect");
const authRoute = require("./routes/authRoute");
const uploadImageRoute = require("./routes/uploadImageRoute");
const getImageRoute = require("./routes/getImageRoute");

app.use(cors(
  {
    origin: ["https://block-vault-app.vercel.app"],
    methods: ["POST","GET"],
    credentials: true
  }
));
app.use(express.json());

app.use("/api", authRoute);
app.use("/api", uploadImageRoute);
app.use("/api", getImageRoute);

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
