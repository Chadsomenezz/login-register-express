const loginModel = require("../model/loginModel");

module.exports = new class loginController{
    constructor() {
    }
    login(req,res){
        res.render(`./login/login`);
    }
    requestLogin(req,res){
        const fetchLogin = async () =>{
            const email = req.body.email;
            const password = req.body.password;
            return await loginModel.fetch(email,password);
        }
        fetchLogin().then(result=>{
            if(!result){
                req.session.destroy()

                res.redirect("/login")
            }else{
                req.session.user = {user_name:result.user_name,user_email:result.user_email,user_id:result.user_id};
                res.redirect("/");
            }
        })
    }


}
