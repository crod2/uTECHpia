const createSpeechData = new SpeechSynthesisUtterance();
createSpeechData.volume = 1;
createSpeechData.rate = 1;
createSpeechData.pitch = 1;
createSpeechData.voice = speechSynthesis.getVoices().find(function (voice) {
  return voice.name === 'Monica';
});

export const renderSpeech = textToRead => {
  const uTechDotSpeech = createSpeechData;
  uTechDotSpeech.text = textToRead;

  return speechSynthesis.speak(uTechDotSpeech);
};
