import express from "express";
import bodyParser from 'body-parser';
import {responseTime} from "./src/middleware/application-level/responseTime";
import axios from "axios";
import router from "./src/router/router";
import routes from "./src/router/router";

const PORT = 3000;


const app = express();
app.use(bodyParser.json());
app.use(express.json());
// setup view engine (do file index.js nằm ở thư mục dist nên sau này , mọi truy cập phải từ file đấy)
app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(responseTime);

app.get("/", async (req, res, next) => {
    try {
        const url = "https://pokeapi.co/api/v2/ability/?limit=100&offset=0";
        const response = await axios.get(url);
        const data = response.data;
        if (data) {
            res.status(200).json({data});
        } else {
            throw Error("<h1>Error<h1>")
        }

    } catch (err) {
        res.end(err.message)
        console.log(err.message)
    }
})

app.use(routes)

app.listen(PORT, () => {
    console.log("App running with port: " + PORT)
});

