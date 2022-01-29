const Mongoose = require("mongoose");

const watchHistorySchema = new Mongoose.Schema(
  {
    watchHistoryId: {
      type: String,
      required: true,
      unique: true,
    },
    accountId: {
      type: String,
      required: true,
    },
    contentId: {
      type: String,
      required: true,
    },
    leftAt: {
      type: String,
      required: true,
    },
    watchHours: {
      type: Number,
      required: true,
    },
    revisits: {
      type: Number,
      required: false,
      default: 1,
    },
    isCompleted: {
      type: Boolean,
      required: false,
      default: false,
    },
    userRating: {
      type: Number,
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

const WatchHistoryModel = Mongoose.model("watchHistory", watchHistorySchema);
module.exports = WatchHistoryModel;
