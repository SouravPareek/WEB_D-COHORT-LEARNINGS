//debouncing
function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}

document.querySelector("#search").addEventListener(
  "input",
  debounce(function () {
    console.log("chala");
  }, 100)
);

//throttling
function throttle(fn, delay) {
  let last = 0;
  return function () {
    const now = Date.now();
    if (now - last >= delay) {
      last = now;
      fn();
    }
  };
}

window.addEventListener(
  "mousemove",
  throttle(function () {
    console.log("hello");
  }, 2000)
);
