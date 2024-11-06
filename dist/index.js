import express from "express";
const app = express();
const port = 8080;
app.get("/", (req, res) => {
    console.log("hellloooooo");
    res.send("hellllooooo")
});
app.listen(port, () => {
    console.log("server started");
});
