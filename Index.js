const express = require("express");
const db = require("./Dbconnecton");
const app = express();
app.use(express.static(`${__dirname}/upload`));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors=require("cors")
app.use(cors());


const route=require("./Router")

app.use("/",route)

app.listen(3500, () => {
  console.log("Server Created");
});