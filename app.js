const express = require("express");
const app = express();
const path = require("path");
const session = require('express-session')
const port = 3000;


app.use(session({
    secret: 'mvc login',
    resave: false,
    saveUninitialized: true
}))

app.use(express.static(path.join(__dirname,"public")))
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));


const middleware = require("./middleware");
app.get("/",middleware.requireLogin,(req,res,next)=>{
    res.render("home",req.session.user)
})

//for login
const loginRoute = require("./router/loginRoute");
app.use("/login",loginRoute);

//for logout
const logoutRoute = require("./router/logoutRoute");
app.use("/logout",logoutRoute);


//if user go to view that doesn't exist
app.use((req,res)=>{
    res.statusCode = 404;
    res.render('404',{title:"Page not found"});
})

app.listen(port,()=>console.log(`listening at port :`,port))