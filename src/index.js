// const express = require("express");
import express from "express";
import React from "react";
// const renderToString = require("react-dom/server").renderToString;
import { renderToString } from "react-dom/server";
import Home from "./client/components/Home";
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  const content = renderToString(<Home />);

  const html = `
  <html>
  <head>
  </head>
  <body id="root">
  ${content}
  </body>
  <script src="bundle.js"></script>
  </html>
  `;
  res.send(html);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
// browser ->server( express server,it creates html file consist of js,css and data)-> server(AWS)
// components -renderToString- webpack - babel - bundle.js -server
