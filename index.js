const formConvertElement = document.getElementById("form-converter");

const outputSymbolElement = document.getElementById("output-symbol");
const outputAmountElement = document.getElementById("output-amount");
const outputResultElement = document.getElementById("output-result");

const dataSymbolRates = [
  { symbol: "USD/IDR", rate: 15_095 },
  { symbol: "IDR/USD", rate: 0.0000662471 },
];

function convertCurrency({ amount, symbol }) {
  // const symbolFrom = symbol.substring(0, 3);
  // const symbolTo = symbol.substring(symbol.length - 3);

  const symbolRate = dataSymbolRates.find((symbolRate) => {
    return symbol === symbolRate.symbol;
  });

  return amount * symbolRate.rate;
}

formConvertElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(formConvertElement);

  const amount = Number(formData.get("amount"));
  const from = formData.get("from");
  const to = formData.get("to");
  const symbol = `${from}/${to}`;

  const result = convertCurrency({ amount, symbol });

  outputSymbolElement.innerHTML = symbol;
  outputAmountElement.innerHTML = amount;
  outputResultElement.innerHTML = result;
});
