import express from "express";
const app = express();
const port = 3000;
const cwd = process.cwd();

app.use(express.static("files"));
app.use(express.static("html", {extensions: ["html"]}));
app.get("/", (req, res) => {
    res.sendFile("html/index.html", {root: cwd});
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});