const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  likes: { type: Number, default: 0 },
  shares: { type: Number, default: 0 },
  comments: [{ content: String, date: { type: Date, default: Date.now } }],
});

module.exports = mongoose.model('Video', VideoSchema);
