import express from "express";
const router = express.Router();
export default router;
import checkApiToken from "../middleware/api.checkToken";



router.use(checkApiToken);

router.get("/", (req, res, next) => {
    res.json({message: "token vaild, you can acces!"})

});

router.get("/1", (req, res, next) => {
    res.json({user: 1})

});
