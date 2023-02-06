// trial 1
const inputForm = document.getElementById("input-form");
const getInputElementId = document.getElementById("input-field");
const getOutputElementId = document.getElementById("output-field");
const rateCheck = document.getElementById("check-rate");
const fetchUrlCheck = document.getElementById("check-fetch-url");
// const submitButton = document.getElementById("button-submit");

const buttonGetApi = document.getElementById("button-get-api");

const liveRate = document.getElementById("live-rate");

// will be inside a function
inputForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const urlLive = "https://api.exchangerate.host/convert?from=SGD&to=IDR";
  const response = await fetch(urlLive);
  const data = await response.json();
  const liveRate = data.result.toFixed(2);
  // const rate = 11500;
  const output = Number(getInputElementId.value * liveRate);
  getOutputElementId.innerText =
    getInputElementId.value + " SGD = " + output + " IDR";
  rateCheck.innerText = `1 SGD = ${liveRate} IDR`;
});

// test function to get API data (only applied to the optional 'Get API' button)
buttonGetApi.addEventListener("click", async () => {
  const url = `https://api.exchangerate.host/convert?from=SGD&to=IDR`;
  const response = await fetch(url);
  // .then((response) => response.json())
  // .then((data) => console.log(data));
  const data = await response.json();
  // console.log(response);
  // console.log(response.query);
  // console.log(data);
  // console.log(data.query);
  // console.log(data.query.from);
  // console.log(data.query.to);
  // console.log(data.result.toFixed(2));
  liveRate.innerText = `Live Rate = ${data.result.toFixed(2)}`;
});
