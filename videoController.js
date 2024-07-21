const Video = require('../models/Video');

exports.likeVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    video.likes += 1;
    await video.save();
    res.json({ likes: video.likes });
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.shareVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    video.shares += 1;
    await video.save();
    res.json({ shares: video.shares });
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.commentVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    video.comments.push({ content: req.body.content });
    await video.save();
    res.json(video.comments);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
