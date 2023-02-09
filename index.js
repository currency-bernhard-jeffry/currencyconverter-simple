const formConvertElement = document.getElementById("form-converter");

const outputSymbolElement = document.getElementById("output-symbol");

const outputAmountElement = document.getElementById("output-amount");

const outputResultElement = document.getElementById("output-result");

async function convertCurrency({ amount, symbol }) {
  // amount ? symbol ?
  const symbolFrom = symbol.substring(0, 3); // symbol dari sini
  const symbolTo = symbol.substring(symbol.length - 3);

  const url = `https://api.exchangerate.host/convert?from=${symbolFrom}&to=${symbolTo}`;
  const response = await fetch(url); // fetch dari url dimasukkan menjadi variabel response
  const data = await response.json(); // response dijadikan json lalu dimasukkan ke variabel data
  // ini aslinya:
  //  const response = fetch(url)
  //    .then((response) => response.json())
  //    .then((data) => console.log(data));

  const result = amount * data.result; // data.result itu dari JSON object-nya
  const resultFixed = Number.parseFloat(result).toFixed(2);

  return resultFixed;
}

// this is first function
// ini event ketika submit
formConvertElement.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(formConvertElement);

  const amount = Number(formData.get("amount")); // amount dari sini
  const from = formData.get("from");
  const to = formData.get("to");
  const symbol = `${from}/${to}`; // symbol dari sini, ini nanti di-substring ke symbolFrom

  // amount & symbol di-pass ke function convertCurrency di bawah ini:
  const result = await convertCurrency({ amount, symbol });

  outputSymbolElement.innerHTML = symbol;
  outputAmountElement.innerHTML = amount;
  outputResultElement.innerHTML = result;
});
