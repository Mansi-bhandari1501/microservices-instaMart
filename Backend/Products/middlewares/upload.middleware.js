// const multer = require('multer')
// const path = require('path')
import multer from "multer";
import path from "path";
const upload = multer({
   storage: multer.diskStorage({
       destination: (req, file, cb) => {
           console.log(req.body, "cwdcewc")
           console.log(req.files, "dddd")
          return cb(null, ("uploads"))
       },
       filename: (req, file, cb) => {
          return cb(null, `${Date.now()}_${file.originalname}`)
       }
  
   })
}).fields([{name: 'images', maxCount: 12}]);

export default upload;