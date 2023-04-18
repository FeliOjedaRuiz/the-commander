const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const establishmentSchema = new Schema(
  {
    name: {
      type: String,
      require: 'The stablishment name is required'
    },
  },
  { timestamps: true }
);

const Establishment = mongoose.model("Establishment", establishmentSchema);
module.exports = Establishment;