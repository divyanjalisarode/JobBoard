const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const port = 3020
const app = express()
app.use(express.static(__dirname))
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://127.0.0.1:27017/jobseekers')
const db = mongoose.connection
db.once('open',()=>{
    console.log("Mongodb connection successful")
})
const userSchema1 = new mongoose.Schema({
    full_name:String,
    user_name:String,
    email:String,
    phone:String,
    password:String
})

const Users1 = mongoose.model("data",userSchema1)
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'jobseeker2.html'))
})

app.post('/post1',async (req,res)=>{
    const {full_name,user_name,email,phone,resume,password} = req.body
    const user = new Users({
        full_name,
        user_name,
        email,
        phone,
        resume,
        password
    })
    await user.save()
    console.log(user)
    res.send("Sign-in successful")
})
app.listen(port,()=>{
    console.log("Server started")
})