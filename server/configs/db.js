import mongoose from "mongoose";

const ConnectDB = async ()=> {
    try {
        mongoose.connection.on('connected', ()=> console.log("Database Connected"));
        await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`)
    } catch(error) {
    console.log(error.message);
    }
}

export default ConnectDB
