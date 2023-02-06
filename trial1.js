// trial 1
const inputForm = document.getElementById("input-form");
const getInputElementId = document.getElementById("input-field");
const getOutputElementId = document.getElementById("output-field");
const rateCheck = document.getElementById("check-rate");
const fetchUrlCheck = document.getElementById("check-fetch-url");
// const submitButton = document.getElementById("button-submit");

// will be inside a function
inputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const rate = 11500;
  const output = Number(getInputElementId.value * rate);
  getOutputElementId.innerText = output;
  rateCheck.innerHTML = rate;
});

// function to get api
const url = `https://api.exchangerate.host/convert?from=SGD&to=IDR`;
const response = fetch(url);
console.log(response);
