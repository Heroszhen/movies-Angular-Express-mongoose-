/*
npm init -y   ;
npm i express mongoose
sudo npm install --save body-parser
//npm install -g nodemon  ;
sudo npm install -g --force nodemon
*/

const express = require("express");
const app = express();

const apirouter = require("./apirouter").router;

app.use("/api",apirouter);
app.listen('3000');