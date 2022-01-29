const Mongoose = require("mongoose");

const userCardSchema = new Mongoose.Schema(
  {
    userCardId: {
      type: String,
      required: true,
      unique: true,
    },
    cards: [
      {
        cardId: {
          type: String,
          required: true,
          unique: true,
        },
        cardNumber: {
          type: String,
          required: true,
        },
        isActive: {
          type: Boolean,
          required: false,
          default: true,
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
      required: false,
      default: true,
    },
  },
  {
    timestamp: true,
    strict: false,
  }
);

const UserCardModel = Mongoose.model("usercard", userCardSchema);
module.exports = UserCardModel;
