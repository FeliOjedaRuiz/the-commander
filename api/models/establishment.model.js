const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const establishmentSchema = new Schema(
  {
    name: {
      type: String,
      required: 'The establishment name is required'
    },
    // users: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //   },
    // ],
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

establishmentSchema.virtual("users", {
  ref: "User",
  localField: "_id",
  foreignField: "establishment",
  justOne: false,
});

const Establishment = mongoose.model("Establishment", establishmentSchema);
module.exports = Establishment;