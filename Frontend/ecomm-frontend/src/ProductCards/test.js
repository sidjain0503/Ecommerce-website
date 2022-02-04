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
    enum: ["Category1", "Category2", "Category3"],
  },
  discription: {
    type: String,
    required: true,
  },
  reviews: [
    {
      userID: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
      name: { type: String, required: true },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model("Product", product);
// ************************************************************************************************

// The schema for storing user data
// ************************************************************************************************
const user = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 30,
    minLength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  profileImageUrl: {
    type: String,
    //   required: true,
    default: "SOME GENERIC IMAGE URL",
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
});
module.exports = mongoose.model("User", user);
// ************************************************************************************************

// The schema for storing order details
// ************************************************************************************************

const order = new mongoose.Schema({
  shippingInfo: {
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    pinCode: {
      type: Number,
      required: true,
    },
    phoneNo: {
      type: Number,
      required: true,
    },
  },
  orderedItems: [
    // ordered items is an array of objects which contain info about items which were ordered
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      image: {
        type: String,
        required: true,
      },
      product: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        // the ref means we can only add the products which are present in the product model
        required: true,
      },
    },
  ],
  userID: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  paymentInfo: {
    id: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  paidAt: {
    type: Date,
    required: true,
  },
  itemsPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  taxPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  shippingPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  orderStatus: {
    type: String,
    required: true,
    default: "Processing",
    enum: ["Processing", "Shipped", "Delivered"],
  },
  deliveredAt: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Order", order);
// ************************************************************************************************
