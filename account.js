const Mongoose = require("mongoose");

const accountSchema = new Mongoose.Schema(
  {
    accountId: {
      type: String,
      required: true,
      unique: false,
    },
    group: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["root", "admin", "staff", "user"],
    },
    privileges: [
      {
        privilegeId: {
          type: String,
          required: true,
        },
        resource: {
          type: String,
          required: true,
        },
        read: {
          type: Boolean,
          required: true,
          default: true,
        },
        create: {
          type: Boolean,
          required: true,
          default: true,
        },
        update: {
          type: Boolean,
          required: true,
          default: true,
        },
      },
    ],
    email: {
      type: String,
      requred: true,
      unique: true,
    },
    alternateEmail: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: true,
    },
    alternatePhone: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    isMFA: {
      type: Boolean,
      required: false,
      default: false,
    },
    securityParaphrase: {
      type: String,
      required: true,
    },
    activeSessionDevices: [
      {
        activeSessionDeviceId: {
          type: String,
          required: true,
          unique: true,
        },
        deviceType: {
          type: String,
          required: true,
          enum: ["mobile", "tablet", "laptop", "tv"],
        },
        isSessionActive: {
          type: Boolean,
          required: true,
          default: true,
        },
        isActive: {
          type: Boolean,
          required: false,
          default: true,
        },
        lastLogin: {
          type: Date,
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
    isPremium: {
      type: Boolean,
      required: false,
      default: true,
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

const AccountModel = Mongoose.model("account", accountSchema);
module.exports = AccountModel;
