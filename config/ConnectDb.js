const mongoose = require("mongoose");
require("dotenv").config()

const ConnectDb =async ()=>{

    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Db is connected');
    } catch (error) {
        console.log('Db is not connected');
    }
}

module.exports=ConnectDb;