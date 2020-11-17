const loro = new SpeechSynthesisUtterance();

const loroUtterance = text => {
  loro.text = text;
  loro.volume = 1;
  loro.rate = 1;
  loro.pitch = 1;
  loro.voice = speechSynthesis.getVoices().find(function (voice) {
    return voice.name === 'Monica';
  });
};
