const process = document.querySelector(".process");
let calculation = "";

function clear() {
  process.innerHTML = "";
}

function getvalue(event) {
  clicked = event.target.innerHTML;
  switch (clicked) {
    case "+":
    case "-":
    case "%":
      calculation += clicked;
      break;

    case "×":
      clicked = "*";
      calculation += clicked;
      break;

    case "÷":
      clicked = "/";
      calculation += clicked;
      break;

    case "C":
      process.innerHTML = "0";
      calculation = "";
      break;

    case "=":
      let result = eval(calculation);
      process.innerHTML = result;
      calculation = "";
      break;

    case "⇦":
      let back = calculation.slice(0, calculation.length - 1);
      process.innerHTML = back;
      calculation = back;
      break;

    default:
      if (
        !isNaN(parseInt(clicked)) ||
        (clicked === "." && calculation.indexOf(".") === -1)
      ) {
        if (
          calculation === "" ||
          isNaN(parseInt(calculation[calculation.length - 1]))
        ) {
          process.innerHTML = "";
        }
        process.innerHTML += clicked;
        calculation += clicked;
      }
  }
}
