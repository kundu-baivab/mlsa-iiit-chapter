const express=require('express');
const cookieparser=require('cookie-parser');
const mongoose=require('mongoose');

const app=express();
const authRoutes=require('./routes/authRoutes')
const {requireAuth,checkUser}=require('./middlewares/authMiddlewares')

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
    const token=req.cookies.jwt
    if(token){
        jwt.verify(token,"secret key",(err,decodedToken)=>{
            if(err) res.render('login')
            else res.render('main')
        })
    }
    else res.render('login')
})

app.get('/main',requireAuth,(req,res)=>{
    res.render('main')
})

app.use(authRoutes);