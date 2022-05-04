// const express = require("express");
import "babel-polyfill";
import express from "express";
import createStore from "./helpers/createStore";
const app = express();
import renderer from "./helpers/renderer";

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();
  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
// browser ->server( express server,it creates html file consist of js,css and data)-> server(AWS)
// components -renderToString- webpack - babel - bundle.js -server
