const core_model = require("./core_model");
module.exports = new class loginModel extends core_model{
    constructor() {
        super();
    }
    fetch(email,password){
        return new Promise((res,rej)=>{
            this.connection.query(`SELECT * FROM users WHERE user_email = ? AND user_password = ?`,[email,password],(err,rows,field)=>{
                try{
                    res(rows[0])
                }catch (err) {rej(err)}
            })
        })

    }
}