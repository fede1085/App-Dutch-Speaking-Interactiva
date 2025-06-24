const express = require('express');
const router = express.Router();
const { processSpeech } = require('../services/speechService');

router.post('/process', async (req, res) => {
  try {
    const { audio } = req.body;
    const result = await processSpeech(audio);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to process speech' });
  }
});

module.exports = router;
