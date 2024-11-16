// 함수는 매개변수를 유연하게 받을수록 재사용성이 증가
// Object.prototype.toString.call().slice(8,-1).toLowerCase() -> 값의 타입을 정확하게 확인할 수 있는 방법
function getValueAtObject(obj, key) {
  if (Object.prototype.toString.call(object).slice(8, -1).toLowerCase() === "object") {
    throw new TypeError("첫 번째 인수는 객체 타입이어야 합니다.");
  }

  if (!(typeof key === "string")) {
    throw new TypeError("두 번째 인수는 문자 타입이어야 합니다.");
  }

  if (Object.keys(obj).includes(key)) {
    return obj[key];
  } else {
    throw new SyntaxError("Error!");
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

// 3. Object.hasOwnProperty(key) -> 안전하게 받을 수 있는 방법

function _getValueAtObject(object, key) {
  const entries = Object.entries(object);

  // for(let [k,v] of entries) if(k === key) return v

  // entries.forEach([k,v]) => k === key ? value = v : ''

  for (let keyValue of entries) {
    const _key = keyValue[0];
    const value = keyValue[1];

    if (_key === key) {
      return value;
    }
  }
}

console.log(_getValueAtObject(obj, "name"));
