import express from "express";
import bodyParser from 'body-parser';
import checkApiToken from "./src/middleware/api.checkToken";
import apiRouter from "./src/routers/api.routers"
import rateLimit from "express-rate-limit"


const PORT = 3000;

// api rate limiter
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

const app = express();
app.use(bodyParser.json());
app.use(express.json());
// setup view engine (do file index.js nằm ở thư mục dist nên sau này , mọi truy cập phải từ file đấy)
app.set("view engine", "ejs");
app.set("views", "./src/views");

// setup router for api

app.use("/api",apiLimiter, apiRouter)


app.get("/", (req, res, next) => {
    res.render("index", {body: "Hello world"})
})

app.listen(PORT, () => {
    console.log("App running with port: " + PORT)
});

