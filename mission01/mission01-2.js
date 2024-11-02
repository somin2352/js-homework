function getNumberAtArray(arr, index) {
  if (0 <= index && index < arr.length) {
    // 0 <= index < arr.length 불가
    return arr[index];
  } else {
    console.error("Error!");
  }
}

const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!
