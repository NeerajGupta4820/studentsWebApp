const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./model/Users')
const multer = require('multer')


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/studentsCrud")

app.get('/', (req,res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
});

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
});


app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name, 
        email: req.body.email, 
        age: req.body.age})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})



app.post("/createUser",(req, res)=>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

/*--------------------------file route-----------------*/
// const storage =multer.diskStorage({
//     destination: function(req, file, cb){
//         return cb(null, "./public/Images")
//     },
//     filename: function (req,file, cb) {
//         return cb(null, `${Date.now()}_${file.originalname}`)
//     }
// })

// const upload = multer({storage})
// app.post('/upload',upload.fields('file'), (req,res) => {
//     console.log(req.body)
//     console.log(req.file)

// })

app.delete('/deleteUser/:id', (req, res)=> {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json)
})



app.listen(3001, () =>{
    console.log("server is running")
})