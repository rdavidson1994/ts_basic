import express from "express";
const app = express();
const port = 3000;
const cwd = process.cwd();

app.use(express.static("files"));

const staticPages = [
    "index",
    "thing",
];

for (const page of staticPages) {
    app.get(`/${page}`, (req, res) => {
        res.sendFile(`html/${page}.html`, {root: cwd});
    });
}

app.get("/", (req, res) => {
    res.sendFile("html/index.html", {root: cwd});
});


app.listen(port, "localhost", () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});