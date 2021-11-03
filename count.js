let speech = new SpeechSynthesisUtterance();
speech.lang = "en";
speech.rate = 1;
speech.volume = 1;
speech.pitch = 1;

let totalCount = 1;
let round = 0;
let nextNumber;
let go;

let minNum = 1;
let maxNum = 10;
let signs = [1, -1];

async function count() {
  while (true) {
    await pause(Math.floor(Math.random() * (8000 - 4000)) + 4000);
    if (go) {
      let sign = signs[Math.floor((Math.random() * signs.length))];
      let number = Math.floor(Math.random() * (maxNum - minNum) + minNum);
      nextNumber = sign * number;
      totalCount += nextNumber;
      round += 1;
      speech.text = nextNumber > 0 ? `plus ${nextNumber}` : nextNumber;
      window.speechSynthesis.speak(speech);
    }
  }
};

function pause(duration) {
  return new Promise(resolve => setTimeout(() => {
    resolve();
  }, duration));
};

function setGo(bool) {
  go = bool;
  if (go) {
    $("#status").replaceWith("<span id=\"status\">&#128994;</span>");
  } else {
    $("#status").replaceWith("<span id=\"status\">&#128308;</span>");
  }
};

function showCurrentValue() {
  $("#totalCount").text(`Count: ${totalCount}`);
  $("#round").text(`Round: ${round}`);
};

$(document).ready(() => {
  showCurrentValue();
  setGo(false);
  count();
});

