import mongoose from "mongoose"

const authSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    role:{
        type: String,
        enum: ["customer", "admin","vendor","deliveryPatner"],
        default: "customer"
    },
    status:{
        type:String,
        enum: ["pending", "fulfilled"],
        default: "pending"
    }
},{timestamps: true})
const authModel = mongoose.model('Auth',authSchema);
export default authModel;