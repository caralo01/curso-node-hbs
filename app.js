require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

// Hanle
hbs.registerPartials(__dirname + "/views/partials", function (err) {});
app.set("view engine", "hbs");

app.use(express.static("public"));

// ENVIAR HBS
app.get("/", function (req, res) {
  res.render("home", {
    name: "Carlos Alonso",
    title: "Road Trip by Templated",
  });
});

// ENVIAR HBS
app.get("/generic", function (req, res) {
  res.render("generic", {
    name: "Carlos Alonso",
    title: "Road Trip by Templated",
  });
});

// ENVIAR HBS
app.get("/elements", function (req, res) {
  res.render("elements", {
    name: "Carlos Alonso",
    title: "Road Trip by Templated",
  });
});

// ENVIAR UN TEXTO
app.get("/hola-mundo-2", function (req, res) {
  res.send("Hola mundo mass chetado");
});

// ENVIAR UN FICHERO HTML
app.get("*", function (req, res) {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`El ejemplo está corriendo en ${port}`);
});
