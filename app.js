const express = require("express");
const app = express();
const dot = require("dotenv").config({ path: "./config.env" });
const port = process.env.NODE_PORT | 3000;
const {
  signupUser,
  signIn,
  forgetPassword,
  changePassword,
} = require("./controller/user");
const mongo = require("./Database/Connect");

app.use(express.json());
app.post("/signup", signupUser);
app.post("/signin", signIn);
app.patch("/forgetPassword", forgetPassword);
app.patch("/password", changePassword);

app.listen(port, (e) => console.log(`http://localhost:${port}`));
