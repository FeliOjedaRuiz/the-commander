const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: 'Username is required',
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
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;