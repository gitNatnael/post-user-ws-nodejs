const mongoose = require("mongoose");
const config = require("../config/constant");
const clientOption = {
  socketTimeoutMS: 30000,
  keepAlive: true,
  poolSize: 50,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: false,
};

const connectUserDb = async () => {
  await mongoose.connect(config.MONGO_ATLAS, clientOption);
  console.log("db connected");
};

module.exports = connectUserDb;
