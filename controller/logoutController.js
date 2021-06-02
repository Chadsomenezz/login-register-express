module.exports = new class logoutController {
    constructor() {
    }
    logout(req,res){
        req.session.destroy();
        res.redirect("/");
    }
}