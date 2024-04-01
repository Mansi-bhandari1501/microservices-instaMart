import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    uuId:{
        type: String,
        // required: true,
    },
    productName:{
        type: String,
        // required: true,
    },
    quantity:{
        type:Number,
        
        default : null
    },

    regularPrice:{
        type:Number,
    },
    salePrice:{
        type:Number,
    },
    sku:{
        type:Number,
    },
    description:{
        type: String,
    },
    productImage:[{
        type: String,
    }],
    category:{
        type: String
    },
    brand:{
        type: String
    },
    tag:{
        type: String
    },
    sellerId:{
        // type: String
        type:mongoose.Schema.Types.ObjectId,
        ref:"seller"    
     },

},{timestamps: true})
const productModel = mongoose.model( 'product', productSchema);
export default productModel;