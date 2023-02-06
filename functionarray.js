function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45, 31, 32];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30
