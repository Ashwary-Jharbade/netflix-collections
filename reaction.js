const Mongoose = require("mongoose");

const reactionSchema = new Mongoose.Schema(
  {
    reactionId: {
      type: String,
      required: true,
    },
    contentId: {
      type: String,
      required: true,
    },
    reactions: [
      {
        reactionId: {
          type: String,
          required: true,
        },
        quotedReactionId: {
          type: String,
          required: false,
        },
        accountId: {
          type: String,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
        isActive: {
          type: Boolean,
          default: true,
          required: false,
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

const ReactionModel = Mongoose.model("reaction", reactionSchema);
module.exports = ReactionModel;
