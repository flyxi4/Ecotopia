const Article = require('../models/Article');

exports.likeArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    article.likes += 1;
    await article.save();
    res.json({ likes: article.likes });
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.shareArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    article.shares += 1;
    await article.save();
    res.json({ shares: article.shares });
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.commentArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    article.comments.push({ content: req.body.content });
    await article.save();
    res.json(article.comments);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
