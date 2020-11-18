/** function that implements SpeechFunction's design pattern*/
function SpeechFunction(textToRead) {
  if (!SpeechFunction._instance) {
    SpeechFunction._instance = this;
  }

  const createSpeechData = new SpeechSynthesisUtterance();
  createSpeechData.text = textToRead;
  createSpeechData.volume = 1;
  createSpeechData.rate = 1;
  createSpeechData.pitch = 1;
  createSpeechData.voice = speechSynthesis.getVoices().find(function (voice) {
    return voice.name === 'Monica';
  });

  return speechSynthesis.speak(createSpeechData);

  return SpeechFunction._instance;
}

export default SpeechFunction;
