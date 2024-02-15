const mongoose = require('mongoose')

const connectionString = process.env.CONNECTION_STRING

mongoose.connect(connectionString).then(()=>{
    console.log("MongoDB atlas connected suussfully");
}).catch((reason)=>{
    console.log(reason);
    console.log("MomgoDB Connection failed!!!");
})