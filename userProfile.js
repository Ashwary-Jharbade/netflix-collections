const Mongoose = require("mongoose");

const userProfileSchema = new Mongoose.Schema(
  {
    userProfileId: {
      type: String,
      required: true,
      unique: true,
    },
    accountId: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: true,
    },
    avatarPath: {
      type: String,
      required: false,
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

const UserProfileModel = Mongoose.model("userprofile", userProfileSchema);
module.exports = UserProfileModel;
