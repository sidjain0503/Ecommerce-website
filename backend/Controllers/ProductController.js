const Product = require('../Models/productModel')
// Product upload 
module.exports.productUpload =(req,res)=>{
    const product = new Product({
      name: req.body.name,
      ratings: req.body.ratings,
      productImage :{
        data: req.file.filename,
        contentType: 'image/png/jpg'
      },
      price:req.body.price,
      stock:req.body.stock,
      category:req.body.category,
      description:req.body.description
    });
  

    //This code is commented for now ! 
      // product.save().then(()=>{
      //   // console.log("added to mongodb successfully")
      //   res.send("added to mongodb successfully")
      // }).catch((err)=>{
      //   console.log(err)
      // });
      res.send(req.file)
      // res.send(req.body)
   
}

// Product Show 
module.exports.productShow =(req,res)=>{
  
  // res.send("ProductSHow")
  Product.find().then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  });
 
}
// Product Update 
// Product Delete
