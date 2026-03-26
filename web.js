let display = document.getElementById("display");

function add(value) {
  display.value += value;
}

function result() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function clearAll() {
  display.value = "";
}