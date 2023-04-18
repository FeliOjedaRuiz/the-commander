const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema(
  {
    table: {
      type: String,
      require: 'table is required',
      maxLength: [8, 'max length 8 characters'],
    },
    taker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",      
    },
    state: {
      type: String,     
    },
    establishment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Establishment",      
    },
  },
  { timestamps: true }
);

const Service = mongoose.model("Service", serviceSchema);
module.exports = Service;