const mongoose = require('mongoose');

const connectDB = async () =>{
    try {
        const uri = process.env.MONGO_URI;
        if (!uri) {
          throw new Error("MONGO_URI is missing in .env file");
        }
        await mongoose.connect(uri);
        console.log("MongoDB Connected Successfully");
        console.log("|/////////////////////////////////////|")

    } catch (error) {
        console.log("MongoDB Connection Failed",error);
        console.log("|/////////////////////////////////////|")
        process.exit(1);
    }

        
}


module.exports = connectDB;