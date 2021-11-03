let speech = new SPeechSynthesisUtterance();
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
  }
}

function pause(duration) {
  return new Promise(resolve => setTimeout(() => {
    resolve();
  }, duration));
}

