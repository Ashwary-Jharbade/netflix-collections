const Mongoose = require("mongoose");

const planSchema = new Mongoose.Schema(
  {
    planId: {
      type: String,
      required: true,
      unique: true,
    },
    price: [
      {
        priceId: {
          type: String,
          required: true,
          unique: true,
        },
        countryId: {
          type: String,
          required: true,
        },
        currency: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
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
    videoQuality: {
      type: String,
      require: true,
    },
    maxResolution: {
      type: String,
      require: true,
    },
    devices: [
      {
        deviceId: {
          type: String,
          required: true,
          unique: true,
        },
        deviceType: {
          type: String,
          required: true,
        },
        iconUrl: {
          type: String,
          required: true,
        },
        isActive: {
          type: Boolean,
          required: true,
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

const PlanModel = Mongoose.model("plan", planSchema);
module.exports = PlanModel;
