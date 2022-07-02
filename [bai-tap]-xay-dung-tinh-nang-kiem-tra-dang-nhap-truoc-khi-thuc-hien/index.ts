import {AppDataSource} from "./src/data-source";
import {User} from "./src/entity/User";
import express from "express";
import bodyParser from 'body-parser';
import authRouter from "./src/routes/auth.route";
import cookieParser from "cookie-parser";

const PORT = 3000;

AppDataSource.initialize().then(async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(cookieParser())
    // setup view engine (do file index.js nằm ở thư mục dist nên sau này , mọi truy cập phải từ file đấy)
    app.set("view engine", "ejs");
    app.set("views", "./src/views");

    app.use("/", authRouter);


    app.listen(PORT, () => {
        console.log("App running with port: " + PORT)
    })
});
