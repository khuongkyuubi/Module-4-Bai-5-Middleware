import fs from "fs";
import appRoot from "app-root-path";
const __rootname = appRoot.path;

import path from "path";


export default function requireAuth(req, res, next) {
    let sessionId = req.cookies.sessionId || "";
    console.log(sessionId)
    try {
        let pathName = path.join(__rootname, "src", "token", sessionId)
        let checkSessionId = fs.existsSync(pathName);
        if (!sessionId || !checkSessionId) {
            res.redirect("/login");
            return;
        }
        next();
    } catch (err) {
        console.log(err.message);
        res.redirect("/login");
    }



};
