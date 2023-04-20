const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: 'Username is required',
      maxLength: [8, 'max length 8 characters'],
    },
    email: {
      type: String,
      required: [true, 'The user email is required'],
      match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'a password is required'],
      minLength: [8, 'min length 8 characters'],
      maxLength: [20, 'max length 20 characters'],
    },
    role: {
      type: String,
      enum: ['admin','manager', 'service', 'kitchen', 'bar'],
      require: [true, 'a role is required'],
    },
    establishment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Establishment",      
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

userSchema.pre("save", function (next) {
  const user = this;

  if (user.isModified("password")) {
    bcrypt
      .genSalt(10)
      .then((salt) => {
        return bcrypt.hash(user.password, salt).then((hash) => {
          user.password = hash;
          next();
        });
      })
      .catch((error) => next(error));
  } else {
    next();
  }
});

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compare(password, this.password)
};

userSchema.virtual("services", {
  ref: "Service",
  localField: "_id",
  foreignField: "taker",
  justOne: true,
});

const User = mongoose.model("User", userSchema);
module.exports = User;