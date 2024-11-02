function getValueAtObject(obj, key) {
  if (Object.keys(obj).includes(key)) {
    return obj[key];
  } else {
    console.error("Error!");
  }
}

const person = {
  name: "Alice",
  age: 25,
  city: "Wonderland",
};

console.log(getValueAtObject(person, "name")); // 'Alice'
console.log(getValueAtObject(person, "age")); // 25
console.log(getValueAtObject(person, "city")); // 'Wonderland'
console.log(getValueAtObject(person, "country")); // Error !

//- 객체의 키 값을 확인하는 방법
// 1. Object.keys(obj).inlcudes(key)

// 2. key in obj

// 3. Object.hasOwnProperty(key)
