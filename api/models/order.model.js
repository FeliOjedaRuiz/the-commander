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
  { timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        return ret;
      },
    },
  }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;