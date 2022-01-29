const Mongoose = require("mongoose");

const bookMarkSchema = new Mongoose.Schema(
  {
    bookMarkId: {
      type: String,
      required: true,
      unique: true,
    },
    userProfileId: {
      type: String,
      required: true,
    },
    bookMarkCollection: [
      {
        bookMarkCollectionId: {
          type: String,
          required: true,
          unique: true,
        },
        episodeId: {
          type: String,
          required: true,
        },
        isActive: {
          type: Boolean,
          default: true,
          required: false,
        },
        createdAt: {
          type: Date,
          required: true,
        },
        updatedAt: {
          type: Date,
          required: true,
        },
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
      required: false,
    },
  },
  {
    timestamp: true,
    strict: false,
  }
);

const BookMarkModel = Mongoose.model("bookmark", bookMarkSchema);
module.exports = BookMarkModel;
