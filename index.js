let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    // Evaluate safely
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// Handle keyboard input
document.addEventListener("keydown", function(event) {
  if ((event.key >= 0 && event.key <= 9) || ["+", "-", "*", "/", "."].includes(event.key)) {
    appendValue(event.key);
  } else if (event.key === "Enter") {
    calculate();
  } else if (event.key === "Backspace") {
    deleteLast();
  } else if (event.key === "Escape") {
    clearDisplay();
  }
});
