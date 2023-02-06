const myPromise = new Promise((resolve, reject) => {
  let i = 11;
  if (i < 10) {
    resolve("Promise is resolved successfully");
  } else {
    reject("Promise is rejected");
  }
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });

myPromise.then((message) => {
  console.log(message);
});
