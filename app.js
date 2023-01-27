const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
    res.send("Olá você!...")
});

app.listen(3000);