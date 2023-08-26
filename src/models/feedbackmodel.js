const mongoose = require("mongoose");

const feedSchema = new mongoose.Schema({
  feedMessage: {
    type: String,
    required: true,
  },
  feedCargo: {
    type: String,
    required: true,
  },
  feedStatus: {
    type: String,
    required: true,
    enum: ["on", "off"],
  },
});

const FeedbackModel = mongoose.model("Feedback", feedSchema);

module.exports = FeedbackModel;
