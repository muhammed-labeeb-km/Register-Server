require('dotenv').config()

const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./DB/connection')
const rServer = express()

rServer.use(cors())

rServer.use(express.json())

rServer.use(router)


const PORT = 3000

rServer.listen(PORT,()=>{
    console.log(`Project started at PORT ${PORT}`);
})

rServer.get('/',(req,res)=>{
    res.send("serever succesfully running at at 3000")
})