const mongoose = require('mongoose');
const validator = require('validator');
const { msgNoValidUrl } = require('../utils/constants');

const reportSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      min: 1,
    },
    date: {
      type: Date,
      default: () => Date.now() + 3 * 60 * 60 * 1000,
    },
    object: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    reportURL: {
      type: String,
      required: true,
      unique: false,
      validate: {
        validator(url) {
          return validator.isURL(url);
        },
        message: msgNoValidUrl,
      },
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model('report', reportSchema);
