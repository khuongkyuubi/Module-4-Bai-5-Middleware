import express from "express";
import bodyParser from 'body-parser';
import fs from "fs";

const PORT = 3000;


const app = express();
app.use(bodyParser.json());
app.use(express.json());
// setup view engine (do file index.js nằm ở thư mục dist nên sau này , mọi truy cập phải từ file đấy)
app.set("view engine", "ejs");
app.set("views", "./src/views");


app.get("/", (req, res, next) => {
    res.render("index", {body: "Error hanldling -> go /one"})
})

app.get("/one", (req, res, next) => {
    fs.promises.readFile("./one.txt")
        .then(data => res.send(data))
        .catch(err => next(err))
});

app.use(((error,req, res, next) => {
    console.error('Error 1111: ', error)

    if(error.type === "time-out") {
        res.status(408).send(error);
    } else {
        res.status(500).send(error);
    }

}))

app.listen(PORT, () => {
    console.log("App running with port: " + PORT)
});

