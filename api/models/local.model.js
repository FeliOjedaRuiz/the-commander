const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const localSchema = new Schema(
  {
    name: {
      type: String,
      require: 'The stablishment name is required'
    },
    email: {
      type: String,
      required: [true, 'The stablishment email is required'],
      match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'a password is required'],
      minLength: [8, 'min length 8 characters'],
    },
  },
  { timestamps: true }
);