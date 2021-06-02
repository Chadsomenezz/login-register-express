const mysql = require("mysql");
const config = require("../config");

module.exports = class core_model{
    constructor() {
        this.connection = mysql.createConnection({
            host     : config.host,
            user     : config.user,
            password : config.password,
            database : config.database
        });

    }
}