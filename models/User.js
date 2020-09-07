const mongoose = require("mongoose");

const RegisterSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    telephone: {
      type: String,
      default: "00-000-000",
    },
    address: {
      type: String,
      default: "unknown",
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamp: true }
);

const Register = mongoose.model("Register", RegisterSchema);
module.exports = { Register };
