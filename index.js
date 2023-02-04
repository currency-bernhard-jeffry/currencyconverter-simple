const formConvertElement = document.getElementById("form-converter");

const outputSymbolElement = document.getElementById("output-symbol");
const outputAmountElement = document.getElementById("output-amount");
const outputResultElement = document.getElementById("output-result");

async function convertCurrency({ amount, symbol }) {
  const symbolFrom = symbol.substring(0, 3);
  const symbolTo = symbol.substring(symbol.length - 3);

  const url = `https://api.exchangerate.host/convert?from=${symbolFrom}&to=${symbolTo}`;
  const response = await fetch(url);
  const data = await response.json();

  const result = amount * data.result;
  const resultFixed = Number.parseFloat(result).toFixed(2);

  return resultFixed;
}

formConvertElement.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(formConvertElement);

  const amount = Number(formData.get("amount"));
  const from = formData.get("from");
  const to = formData.get("to");
  const symbol = `${from}/${to}`;

  const result = await convertCurrency({ amount, symbol });

  outputSymbolElement.innerHTML = symbol;
  outputAmountElement.innerHTML = amount;
  outputResultElement.innerHTML = result;
});
