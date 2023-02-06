const formConvertElement = document.getElementById("form-converter");
// const formConvertElement = document.getElementById("form-converter");

const outputSymbolElement = document.getElementById("output-symbol");
// const outputSymbolElement = document.getElementById("output-symbol");

const outputAmountElement = document.getElementById("output-amount");
// const outputAmountElement = document.getElementById("output-amount");

const outputResultElement = document.getElementById("output-result");
// const outputResultElement = document.getElementById("output-result");

async function convertCurrency({ amount, symbol }) {
  // amount ? symbol ?
  const symbolFrom = symbol.substring(0, 3); //symbol dari sini
  const symbolTo = symbol.substring(symbol.length - 3);

  const url = `https://api.exchangerate.host/convert?from=${symbolFrom}&to=${symbolTo}`;
  const response = await fetch(url); // fetch dari url dimasukkan menjadi variabel response
  const data = await response.json(); // response dijadikan json lalu dimasukkan ke variabel data

  const result = amount * data.result;
  const resultFixed = Number.parseFloat(result).toFixed(2);

  return resultFixed;
}

// ini event ketika submit
formConvertElement.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(formConvertElement);

  const amount = Number(formData.get("amount")); // amount dari sini
  const from = formData.get("from");
  const to = formData.get("to");
  const symbol = `${from}/${to}`; // symbol ini nanti disubstring ke symbolFrom

  const result = await convertCurrency({ amount, symbol });

  outputSymbolElement.innerHTML = symbol;
  outputAmountElement.innerHTML = amount;
  outputResultElement.innerHTML = result;
});
