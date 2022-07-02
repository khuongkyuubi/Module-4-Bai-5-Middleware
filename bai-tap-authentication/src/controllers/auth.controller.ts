const users = [
    {
        userName: "admin",
        password: "123456"
    }

]

class Controller {
    constructor() {
    }

    index(req, res, next) {
        res.render("index", {body: "Hello world"})
        next();
    }

    login(req, res, next) {
        res.render("auth/login", {error: ""})
        next();
    }

    postLogin(req, res, next) {
        let userName = req.body["user-name"]
        let password = req.body["password"]
        users.forEach(user => {


        })
        next();
    }


}

export default (new Controller());