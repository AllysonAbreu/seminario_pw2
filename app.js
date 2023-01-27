const express = require("express");

const app = express();

app.get("/home", (req, res, next) => {
    res.send("Olá você!...").status(200)
});

app.listen(3000);

