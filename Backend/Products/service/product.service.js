import productModel from "../models/product.model.js";
import productSellerModel from "../models/user.model.js";
import { v4 as uuidv4 } from 'uuid';
export const createProduct = async (payload) => {
  try {
    let { sellerId, productName, quantity, price, description, category ,sku,brand,tag,regularPrice,salePrice} = payload.body;

    console.log(payload.body)
    // if (!sellerId || !productName || !quantity || !price || !category) {
    //   throw Object.assign(new Error(), {
    //     name: "BAD_REQUEST",
    //     message: "Invalid Payload",
    //   });
    // }

    // const files = payload.files;
    // let newImage = [];
    //         if (req.files !== null && req.files.images && req.files.images.length > 0) {
    //             newImage = req.files.images.map((i) => {
    //                 return i.path;
    //             });
    //             console.log(newImage, "ghvugyiv");
    //         }
    // const image1 = files?.image1 && (files?.image1[0]?.path || null);
    // const image2 = files?.image2 && (files?.image2[0]?.path || null);
    // const image3 = files?.image3 && (files?.image3[0]?.path || null);
    // const image4 = files?.image4 && (files?.image4[0]?.path || null);
    const productId = uuidv4();
    const newProductData = {
      uuId: productId,
      sellerId: sellerId,
      regularPrice:regularPrice,
      salePrice:salePrice,
      sku: sku,
      brand:brand,
      tag:tag,
      productName: productName,
      description: description,
      category: category,
      price: price,
      quantity: quantity
      // productImage: 
    };

    let product = await new productModel(newProductData).save();
    return { product };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteProduct = async (payload) => {
  try {
    const { _id } = payload.params;

    // handle validation here

    let data = await productModel.findByIdAndDelete(_id);

    return { data };
  } catch (error) {
    throw error;
  }
};
export const registerProductSeller = async (payload) => {
  try {
    console.log(payload,"PAYLOADD😂😂😂😂")
    const  sellerId  = payload?.userId;
    console.log(sellerId,"gweufffffffeugfuwefgwuegfuwegfuwefgwuefgwukfgweg")
    // const { role } = payload.role;
    let existingSeller = await productSellerModel.findOne({sellerId: sellerId});
    console.log("existingSELLER",existingSeller.sellerId)
    console.log("👍😒😊😁👍😂😁", payload)
    if (payload?.role == "vendor" && !existingSeller) {
      const newSellerData = {
        sellerId: payload.userId,
        sellerAddress: payload.address,
        sellerName: payload.name
      }
      let seller = await new productSellerModel(newSellerData).save();
      console.log(seller,"SELLERR")
      return { seller };
    }

    // return { data };
  } catch (error) {
    throw error;
  }
};
export const updateProduct = async (payload) => {
  try {
    let data = await productModel.findByIdAndUpdate(payload.params, {
      $set: payload.body,
    })
    console.log(data)
    return { data };
  } catch (error) {
    throw error;
  }
};

export const fetchAllProducts = async (payload) => {
  // try {

  // //     // handle validation

  // //     // console.log(payload.body)
  //     const page = payload.query
  //     console.log(payload.query)
  //     console.log("hdugduw---------->>>>>",page)
  //     const query = skip(5).limit(5);
  //     const posts = await postModel.find({query}).populate('userid',"email")

  //     console.log("posts------>>>>",posts)
  //     return { posts };
  // }
  // catch (error) {
  //     throw error;
  // }
  // try {
  //   const page = payload.query.page || 1;
  //   // const limit = payload.query.limit || 5;
  //   const skips = (page - 1) * 2;
  //   const query = skip(5).limit(5);
  //   // const postCount = postModel.countDocuments();
  //   // if (req.query.page) {
  //   //   console.log(postCount);
  //   //   if (skip >= postCount) {
  //   //     throw new Error("this page is not found");
  //   //   }
  //   // }
  //   const posts = await postModel
  //     .find(query)
  //     .populate("userid", "email")
  //     // .limit(2)
  //     .sort({ createdAt: -1 });
  //   return posts;
  // } catch (error) {
  //   console.log(error)
  //   throw error;
  // }

  try {
    // console.log("HELLO",payload.user._id )
    console.log("payload------>>>>", payload.query)
    let page = Number(payload.query.page);
    let resultsPerPage = 2;
    console.log("PAGESS", page)
    // if(!page || page.trim() === '') {
    //   page = 0;
    // }
    const productsCount = await productModel.find().count()
    const product = await productModel.find({})
      .sort({ createdAt: 'descending' })
      // .populate('userid',"email firstName lasName")
      .lean()
      .limit(resultsPerPage)
      .skip(page * resultsPerPage)
    // console.log(posts)
    return { product, productsCount }
  }
  catch (error) {
    throw error;
  }
};

export const fetchProduct = async (payload) => {
  try {
    // console.log(payload.params)
    const product = await productModel.findById(payload.params)
    // .populate("user","Name");
    // console.log(getpost)
    return { product };
  } catch (error) {
    throw error;
  }
};

const productService = {
  createProduct,
  updateProduct,
  deleteProduct,
  fetchAllProducts,
  fetchProduct,
  registerProductSeller
};

export default productService;
