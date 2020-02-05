const express = require("express")
const bodyParser = require("body-parser")
const Users = require("./Schema/users")
const mongoose = require("mongoose")
let app = express()


app.use(bodyParser.urlencoded({//body-parser包一些基础设置
    extended:true
}));
app.get("/userlist",(req,res)=>{
    Users.find().then(users=>{
        res.send(users)
    })
})
app.use(bodyParser.json())//中间件,把前台发过来的数据解析成对应的对象格式数据

app.use("/register",(req,res)=>{
    //从前台拿数据存起来
    let {username,password}=req.body;
    //去数据库找数据
   Users.findOne({
    username,
    password
   }).then(user=>{
       if(user){//如果找到数据了,说明已经被注册过了,向前台返回1
            res.send({
                errno:1
            })
       }else{//如果没找到数据,说明可以注册过,向前台返回0,并保存信息
           res.send({
               errno:0
           })
        new Users({//保存用户信息
            username,
            password,
            age:~~(Math.random()*20+20)
           }).save()
       }
   })
})

app.use("/login",(req,res)=>{
    //从前台拿数据存起来
    let {username,password}=req.body;
    //去数据库找数据
   Users.findOne({//从Users查找数据
        username,
        password
    }).then(user=>{
        if(user){//如果该数据找到了,就向前台发送 0标识
            res.send({
                errno:0
            })
        }else{//如果该数据没有找到,就向前台发送 1标识
            res.send({
                errno:1
            })
        }
    })
    // res.send(req.body)
})

mongoose.connect("mongodb://localhost:27017/User",{useNewUrlParser:true,useUnifiedTopology: true},err=>{//连接数据库
    if(err){
        console.log("数据库连接失败")
        return
    }
    app.listen(3000,()=>{
        console.log("3000端口监听成功");
    })
    console.log("数据库连接成功")
})


