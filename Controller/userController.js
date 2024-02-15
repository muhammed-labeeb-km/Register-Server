const users = require('../Models/useModel')

exports.regsiter = async (req,res)=>{
    console.log("Inside REGISTER API");

    const{firstName,mobile,lastName,password,address,dob,email,course,gender}= req.body
    // console.log(firstName,mobile,lastName,password,address,dob,email,course,gender);

    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json("Already registered email")
        }else{
            const newUser = new users({
                firstName,mobile,lastName,password,address,dob,email,course,gender
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }catch(err){
        res.status(401).json(err)
    }
    
}


//getting all data from database

exports.tableView = async (req,res) =>{
    try{
        const allUsers = await users.find()
        if(allUsers){
            res.status(200).json(allUsers)
        }
        else{
            res.status(406).json("No data")
        }
    }catch(err){
        res.status(err)
    }
}