const Mongoose = require("mongoose");

const logSchema = new Mongoose.Schema(
  {
    logId: {
      type: String,
      required: true,
      unique: true,
    },
    collectionName: {
      type: String,
      required: true,
    },
    actionType: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    requestHash: {
      type: String,
      required: true,
    },
    actionStatus: {
      type: Boolean,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  {
    timestamp: true,
    strict: false,
  }
);

const logModel = Mongoose.model("log", logSchema);
module.exports = logModel;
