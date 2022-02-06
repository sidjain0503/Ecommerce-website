const mongoose = require("mongoose");

// The schema for storing products
// ************************************************************************************************
const product = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price Must Be Positive"],
  },
  stock: {
    type: Number,
    required: true,
    min: [0, "Stock Must Be Positive"],
  },
  category: {
    type: String,
    required: true,
    enum: ["Tech", "Category2", "Category3"],
  },
  discription: {
    type: String,
    required: true,
  }
  // ,
  // reviews: [
  //   {
  //     userID: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
  //     name: { type: String, required: true },
  //     rating: { type: Number, required: true },
  //     comment: { type: String, required: true },
  //   },
  // ],
});
// ************************************************************************************************


module.exports = mongoose.model("Product", product);