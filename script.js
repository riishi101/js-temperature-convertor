const result = document.getElementById("result");
const inputAmount = document.getElementById("inputAmount");
const toHeight = document.getElementById("toHeight");
const convert = document.getElementById("convert");

function convertFahrenheit(convertAmount) {
  return ((convertAmount - 32) * 5) / 9;
}

function convertKelvin(convertAmount) {
  return convertAmount - 273.15;
}

function checkTemperature() {
  const convertAmount = parseFloat(inputAmount.value);
  const to = toHeight.value;

  if (isNaN(convertAmount) || convertAmount < 0) {
    result.textContent = "Please enter a valid number";
    return;
  }

  let convertedTemperature;
  switch (to) {
    case "fahrenheit":
      convertedTemperature = convertFahrenheit(convertAmount).toFixed(2);
      break;
    case "kelvin":
      convertedTemperature = convertKelvin(convertAmount).toFixed(2);
      break;
    default:
      result.textContent = "Invalid conversion type";
      return;
  }

  result.textContent = `${convertedTemperature}°C
 `;
}

// event handler
convert.addEventListener("click", (e) => {
  e.preventDefault();

  checkTemperature();
});
