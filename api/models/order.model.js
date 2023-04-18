const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",      
    },
    ready: {
      type:Boolean,
      default: false,      
    },
    state: {
      type: String,     
    },
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",      
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;