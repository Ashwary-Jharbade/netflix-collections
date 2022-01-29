const Mongoose = require("mongoose");

const subscriptionSchema = new Mongoose.Schema(
  {
    subscriptionId: {
      type: String,
      required: true,
      unique: true,
    },
    accountId: {
      type: String,
      required: true,
    },
    planId: {
      type: String,
      required: true,
    },
    orderId: {
      type: String,
      required: true,
    },
    vaildUpto: {
      type: Date,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const SubscriptionModel = Mongoose.model("subscription", subscriptionSchema);
module.exports = SubscriptionModel;
