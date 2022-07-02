import fs from "fs";
import path from "path";

 export default function checkApiToken(req, res, next) {
    const token = req.query.token || "";
    let pathName = path.join(__dirname,"../", "token", "api", token); // do file
    let checkToken = fs.existsSync(pathName);
    // if have no token or cant check Token
     console.log(pathName)
     console.log(checkToken)
    if (!token || !checkToken) {
        res.status(401).json({message: "Invalid API token"})
    } else {
        next();
    }
}

