const formConvertElement = document.getElementById("form-converter");
const outputAmountElement = document.getElementById("output-amount");
const outputResultElement = document.getElementById("output-result");

function convertCurrency(amount) {
  const exchangeRate = 15_000; // get from actual data/array

  const result = amount * exchangeRate;

  return result;
}

formConvertElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(formConvertElement);

  const amount = Number(formData.get("amount"));
  const result = convertCurrency(amount);

  outputAmountElement.innerHTML = amount;
  outputResultElement.innerHTML = result;
});
