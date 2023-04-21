const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema(
  {
    table: {
      type: String,
      required: 'table is required',
      maxLength: [19, 'max length 16 characters'],
    },
    taker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: "Taker user is required"     
    },
    state: {
      type: String,
      enum: ["In service", "Charging", "Finished"],
      default: "In service",     
    },
    establishment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Establishment",
      required: "Establishment's service is required"     
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

const Service = mongoose.model("Service", serviceSchema);
module.exports = Service;