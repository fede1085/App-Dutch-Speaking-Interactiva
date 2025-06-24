async function processSpeech(audio) {
  // TODO: integrate Google Speech API or Whisper
  // For now, mock response
  return {
    transcript: 'Hallo',
    correction: 'Hallo',
    tips: 'Great job!',
  };
}

module.exports = { processSpeech };
