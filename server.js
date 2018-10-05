const express = require("express");
const app = express();

let PORT = process.env.PORT || 8080;

// app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send("Hello");
});

app.listen(PORT, () => {
    console.log('App listening on port 3000!');
});