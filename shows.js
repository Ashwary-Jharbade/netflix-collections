const Mongoose = require("mongoose");

const contentSchema = new Mongoose.Schema(
  {
    showId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    season: {
      type: Number,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    contentOrigin: {
      type: String,
      requied: true,
    },
    contentCetificate: [
      {
        certificateType: {
          type: String,
          requied: true,
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
    thumnails: [
      {
        thumbnailId: {
          type: String,
          requied: true,
        },
        thumnailPath: {
          type: String,
          requied: true,
        },
        screenSize: {
          type: String,
          enum: [
            "mobile",
            "large-mobile",
            "tablet",
            "large-tablet",
            "laptop",
            "desktop",
            "large-monitor",
          ],
          requied: true,
        },
        screenPixelRation: {
          type: String,
          enum: ["1x", "2x", "4x"],
          requied: true,
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
    mediaType: {
      type: String,
      enum: ["show", "movie", "documentry", "anime", "cartoon"],
      default: "show",
    },
    genres: {
      type: [String],
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    cast: [
      {
        artistId: {
          type: String,
          required: true,
        },
        role: {
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
    director: [
      {
        directorId: {
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
    productionHouse: [
      {
        productionHouseId: {
          type: String,
          requied: true,
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
    episodes: [
      {
        episodeId: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        subtitle: [
          {
            language: {
              type: String,
              requied: true,
            },
            transcriptPath: {
              type: String,
              requied: true,
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
        audio: [
          {
            language: {
              type: String,
              requied: true,
            },
            audioPath: {
              type: String,
              requied: true,
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
        videoPath: {
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
    runTime: {
      type: String,
      required: true,
    },
    accessType: {
      type: String,
      enum: ["mobile", "basic", "standard", "premium"],
      requied: true,
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

const ContentModel = Mongoose.model("content", contentSchema);
module.exports = ContentModel;
