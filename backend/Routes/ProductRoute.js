//This file represents Routes for Product and takes functions from ProductController.js --> which has functions to be called . 
const express = require('express');
const productRouter = express.Router();


//The below code for multer is used to accept   product images and store them.  
const multer = require('multer');
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
const { productUpload, productShow ,singleproductShow } = require('../Controllers/ProductController');


productRouter.post('/new', upload.single('productImage'), productUpload); //productUpload 
productRouter.get('/new', productShow);//ProductShow
productRouter.get('/:id', singleproductShow)


module.exports = productRouter