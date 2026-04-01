const express = require("express");

const app = express();

// import your IBM function file
const musicFunction = require("./main");

// root endpoint
app.get("/", (req, res) => {

    const response = musicFunction.main({});

    res.status(response.statusCode)
       .set(response.headers)
       .json(response.body);
});

// health check (Cloud Run best practice)
app.get("/health", (req, res) => {
    res.send("OK");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
