const formConvertElement = document.getElementById("form-converter");

formConvertElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(formConvertElement);

  const amount = Number(formData.get("amount"));

  console.log({ amount });
});
