// ─────────────────────────────────────────
// Task 2: Functions
// ─────────────────────────────────────────
setTimeout(() => {
  console.log('Called after 2.5 seconds');
}, 2500);


function displayAfter(delay, stringToLog) {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
}

displayAfter(1, ' Shown after 1 second');
displayAfter(3, ' Shown after 3 seconds');
displayAfter(0.5, ' Shown after 0.5 seconds');


document.getElementById('btn-1-3').addEventListener('click', () => {
  displayAfter(5, 'Called after 5 seconds');
});


const logEarth  = () => console.log(' Earth');
const logSaturn = () => console.log(' Saturn');

function logPlanet(planetLogFunction) {
  planetLogFunction();
}

logPlanet(logEarth);
logPlanet(logSaturn);

function logLocation() {
  if (!navigator.geolocation) {
    console.log('Geolocation not supported by this browser.');
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    },
    (err) => console.log(`Error: ${err.message}`)
  );
}

document.getElementById('btn-location').addEventListener('click', logLocation);

function showOnMap() {
  if (!navigator.geolocation) {
    console.log('Geolocation not supported.');
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
      console.log(`Opening map at ${latitude}, ${longitude}`);
      window.open(url, '_blank');
    },
    (err) => console.log(`Error: ${err.message}`)
  );
}

document.getElementById('btn-map').addEventListener('click', showOnMap);


function runAfterDelay(delay, callback) {
  setTimeout(callback, delay * 1000);
}

document.getElementById('btn-run-delay').addEventListener('click', () => {
  const delay = parseFloat(document.getElementById('delay-input').value) || 1;
  runAfterDelay(delay, () => {
    console.log(`Callback fired after ${delay} second(s)!`);
  });
});

let lastClickTime = 0;
const DOUBLE_CLICK_THRESHOLD = 500; 

document.getElementById('click-area').addEventListener('click', () => {
  const now = Date.now();
  const gap  = now - lastClickTime;

  if (gap < DOUBLE_CLICK_THRESHOLD) {
    console.log('double click!');
    lastClickTime = 0;
  } else {
    lastClickTime = now;
  }
});

const logFunnyJoke = () => console.log(' Why do programmers prefer dark mode? Because light attracts bugs!');
const logBadJoke   = () => console.log(' Why did the scarecrow win an award? He was outstanding in his field.');

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}

document.getElementById('btn-funny').addEventListener('click', () => jokeCreator(true,  logFunnyJoke, logBadJoke));
document.getElementById('btn-bad').addEventListener('click',   () => jokeCreator(false, logFunnyJoke, logBadJoke));
