import express from "express";
import bodyParser from 'body-parser';

const PORT = 3000;


const app = express();
app.use(bodyParser.json());
app.use(express.json());
// setup view engine (do file index.js nằm ở thư mục dist nên sau này , mọi truy cập phải từ file đấy)
app.set("view engine", "ejs");
app.set("views", "./src/views");


app.get("/", (req, res, next) => {
    res.render("index", {body: "Hello world"})
})

app.listen(PORT, () => {
    console.log("App running with port: " + PORT)
});

