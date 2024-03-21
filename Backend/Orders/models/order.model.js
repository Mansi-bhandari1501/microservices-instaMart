import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"OrderUser" 
    },
    shippingAddress:[{
        type: String,
    }],
    bill:{
        type:String,
    }, 
    orderId:{
        type:String,
    }, 
    uuid:{
        type:String,
    }, 
    products:[{
        type:String
    }],
    status:{
        type:String,
        enum:["placed","fullfilled","pending"],
        default: "pending"
    }
},{timestamps: true})
const ordersModel = mongoose.model('Orders',orderSchema);
export default ordersModel;