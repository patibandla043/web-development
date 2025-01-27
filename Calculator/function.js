let display = document.getElementById("display");

function appendNumber(number) {
  if (display.innerText === "0") {
    display.innerText = number;
  } else {
    display.innerText += number;
  }
}

function appendOperator(operator) {
  const lastChar = display.innerText.slice(-1);
  if ("+-*/".includes(lastChar)) {
    display.innerText = display.innerText.slice(0, -1) + operator;
  } else {
    display.innerText += operator;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  if (display.innerText.length === 1) {
    display.innerText = "0";
  } else {
    display.innerText = display.innerText.slice(0, -1);
  }
}

function appendDot() {
  const parts = display.innerText.split(/[\+\-\*\/]/);
  const currentPart = parts[parts.length - 1];
  if (!currentPart.includes(".")) {
    display.innerText += ".";
  }
}

function calculate() {
  try {
    display.innerText = eval(display.innerText).toString();
  } catch {
    display.innerText = "Error";
  }
}
