const inputValue = document.getElementById('textInput');
const speak = document.getElementById('speakButton');

speak.addEventListener('click', () => {
    const speech = new SpeechSynthesisUtterance(inputValue.value);
    window.speechSynthesis.speak(speech);
})
