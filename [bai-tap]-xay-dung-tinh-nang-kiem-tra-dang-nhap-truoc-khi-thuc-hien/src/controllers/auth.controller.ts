import {User} from "../entity/User";
import {AppDataSource} from "../data-source";
import appRoot from "app-root-path";

const UserRepo = AppDataSource.getRepository(User);
import path from "path";



const rootPath = appRoot.path;
import fs from "fs";


class Controller {
    constructor() {
    }

    index(req, res, next) {
        res.render("index", {body: "Hello world"})
        next();
    }

    async login(req, res, next) {
        res.render("auth/login", {error: ""})
        next();
    }

    async postLogin(req, res, next) {
        let userName = req.body["user-name"]
        let password = req.body["password"]
        let user = await UserRepo.findOneBy({userName});

        if (!user) {
            res.render("auth/login", {error: "User doses not exits!"});
            return;
        }

        if (password !== user.password) {
            res.render("auth/login", {error: "Password doses not match!"});
            return;
        }
// Sau khi dang nhap thi set cookie chứa sessionId
        let sessionId = Date.now() + "." + user.id;
        // let pathToModule = require.resolve('module');
        const userInfo = JSON.stringify(user);
        try {
            fs.writeFileSync(path.join(rootPath, "src", "token", sessionId), userInfo)

        } catch (e) {
            console.log(e.message)
        }
        console.log("cookies",req.cookies)
        res.cookie("sessionId", sessionId,  { maxAge: 900000, httpOnly: true });
        res.redirect("/")
        next();
    }


}

export default (new Controller());