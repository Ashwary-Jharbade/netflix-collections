const Mongoose = require("mongoose");

const notificationSchema = new Mongoose.Schema(
  {
    notificationId: {
      type: String,
      required: true,
    },
    group: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: false,
    },
    accountId: {
      type: String,
      required: false,
    },
    message: {
      type: String,
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

const NotificationModel = Mongoose.model("notification", notificationSchema);
module.exports = NotificationModel;
