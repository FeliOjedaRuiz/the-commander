const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: 'The product name is required'
    },
    description: {
      type: String,
      maxLength: [80, 'max length 80 characters'],
    },
    price: {
      type: Number,
      required: 'Price is required'
    },
    category: {
      type: String,
      maxLength: [15, 'max length 15 characters'],
    }
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

const Product = mongoose.model("Product", productSchema);
module.exports = Product;