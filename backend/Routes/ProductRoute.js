const express = require('express');
const productRouter = express.Router();

const multer = require('multer');
const { productUpload, productShow} = require('../Controllers/ProductController');
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './backend/uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })
  //handle routes
productRouter.post('/new',upload.single('productImage'),productUpload);

productRouter.get('/new',productShow);


module.exports = productRouter