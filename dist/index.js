import express from "express";
const app = express();
const port = 8080;
app.get("/", (req, res) => {
    console.log("hellloooooo");
});
app.listen(port, () => {
    console.log("server started");
});
