// This file has functions like upload and show . to upload products and show them from the database

const Product = require('../Models/productModel')

// Product upload 
module.exports.productUpload =(req,res)=>{

  
    const product = new Product({
      name: req.body.name,
      ratings: req.body.ratings,
      productImage: req.body.productImage,
      price:req.body.price,
      stock:req.body.stock,
      category:req.body.category,
      description:req.body.description
    });
  

    //This code is commented for now ! The below code is  used to add  single products into the database
      product.save().then(()=>{
        // console.log("added to mongodb successfully")
        res.send("added to mongodb successfully")
      }).catch((err)=>{
        console.log(err)
      });

      //Comment the below two lines if working with database
      // res.send(req.body)
      // res.send(req.body)
   
}

// Product Show 
module.exports.productShow =(req,res)=>{
  
  Product.find().then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  });
 
}

//single Product Show

module.exports.singleproductShow =async(req,res)=>{
  const id = await req.params.id;
  // console.log("id is ", id)
  // res.send(id)

  Product.findById(id).then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  });
 
}
// Product Update 
// Product Delete
