const express=require('express');
const cookieparser=require('cookie-parser');
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');

const app=express();
const authRoutes=require('./routes/authRoutes')
const {requireAuth,checkUser,reqAccess}=require('./middlewares/authMiddlewares')

app.set('view engine','ejs');

app.use(express.json());
app.use(cookieparser());
app.use(express.static('public'));

const dbURL="mongodb://127.0.0.1:27017/mlsa";

mongoose.connect(dbURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then((result)=>{
    app.listen(5000,()=>{
        console.log("App is listening on port 5000")
    })
})
.catch((err)=>console.log(err))

app.get('*',checkUser)

app.get('/',(req,res)=>{
    const tok=req.cookies.access
    if(tok){
        jwt.verify(tok,"sec key",(err,decodedToken)=>{
            if(err) res.render('opening')
            else res.render('login')
        })
    }
    else res.render('opening')
})

app.get('/adminlogin',reqAccess,(req,res)=>{
    res.render('login')
})

app.get('/adminsignup',reqAccess,(req,res)=>{
    res.render('signup')
})

app.get('/main',requireAuth,(req,res)=>{
    res.render('main')
})

app.use(authRoutes);