import mongoose from "mongoose"

const authSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    uuId:{
        type:String
    },
    password:{
        type:String,
        required: true
    },
    role:{
        type: String,
        enum: ["user", "admin","vendor","deliveryPatner"],
        // default: "user"
    },
    status:{
        type:String,
        enum: ["pending", "fulfilled"],
        default: "pending"
    }
},{timestamps: true})
const authModel = mongoose.model('auths',authSchema);
export default authModel;   