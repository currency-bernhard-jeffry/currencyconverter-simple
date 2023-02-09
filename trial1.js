const inputForm = document.getElementById("input-form");
const getInputElementId = document.getElementById("input-field");
const getOutputElementId = document.getElementById("output-field");
const rateCheck = document.getElementById("check-rate");
const fetchUrlCheck = document.getElementById("check-fetch-url");
const buttonGetApi = document.getElementById("button-get-api");
const liveRate = document.getElementById("live-rate");

// will be inside a function
inputForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  fetch("https://api.exchangerate.host/convert?from=SGD&to=IDR")
    .then((response) => response.json())
    .then((data) => console.log(data));
  const sgdToIdrConvertUrl =
    "https://api.exchangerate.host/convert?from=SGD&to=IDR";
  const response = await fetch(sgdToIdrConvertUrl);
  const data = await response.json();
  const liveRate = data.result;
  const output = getInputElementId.value * liveRate;
  const outputTwoDecimalRoundUp = Number.parseFloat(output).toFixed(2);
  getOutputElementId.innerText =
    getInputElementId.value + " SGD = " + outputTwoDecimalRoundUp + " IDR";
  rateCheck.innerText = `1 SGD = ${liveRate} IDR`;
});

// test function to get API data (only applied to the optional 'Get API' button)
buttonGetApi.addEventListener("click", async () => {
  fetch("https://api.exchangerate.host/symbols")
    .then((response) => response.json())
    .then((data) => console.log(data));
  const symbolsUrl = "https://api.exchangerate.host/symbols";
  const response = await fetch(symbolsUrl);
  const dataSymbols = await response.json();
  const symbolsCode = dataSymbols.symbols;
  console.log(symbolsCode);
  console.log(symbolsCode.description);
  console.log(symbolsCode.code);
  console.log(symbolsCode[0]);
  console.log(symbolsCode[1]);
  const symbolsCodeParsed = JSON.parse(symbolsCode);
  console.log(symbolsCodeParsed);
});
