const Mongoose = require("mongoose");

const orderSchema = new Mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
    },
    accountId: {
      type: String,
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
    },
    planId: {
      type: String,
      required: true,
    },
    orderStatus: {
      type: String,
      enum: ["failed", "success", "pending"],
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

const OrderModel = Mongoose.model("order", orderSchema);
module.exports = OrderModel;
