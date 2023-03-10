const express = require ("express");
const mongoose = require ("mongoose");
const dotenv = require ("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
dotenv.config();

const PORT = process.env.PORT||8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.DB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
  });

  const connection = mongoose.connection;
  connection.once("open", () => {
   console.log("🚀 DB Connected Successfully");
  });

  const transportRouter = require("./routes/transports.js");
  const driverRouter = require("./routes/drivers.js")

  app.use("/transport",transportRouter);
  app.use("/driver",driverRouter);

app.listen(PORT,() => {console.log("Server is started")} )
