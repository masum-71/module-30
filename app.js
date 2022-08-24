//Problem:1
//1

const multiply = (a, b, c) => a * b * c;
console.log(multiply(2, 5, 4));

//2

const multiLine = `I am a web developer.
I love to code.
I love to eat biryani`;
console.log(multiLine);

//3

const defaultPara = (a, b = 0) => a + b;
console.log(defaultPara(20));

//Problem:2
const friends = [
  "lingkon",
  "maksud",
  "rahim",
  "belal",
  "arif",
  "mim",
  "eliash",
];

const evenFriends = (parameter) => {
  const evenList = [];
  for (let eliment of parameter) {
    if (eliment.length % 2 === 0) {
      evenList.push(eliment);
    }
  }
  return evenList;
};

console.log(evenFriends(friends));

//Problem:3

const numbers = [2, 5, 6, 8, 7];

const square = (num) => {
  let sum = 0;
  const squared = num.map((e) => e * e);
  for (let num of squared) {
    sum += num;
  }
  return sum;
};

console.log(square(numbers));

//Problem:4

const arr1 = [10, 25, 65, 85, 47, 98];
const arr2 = [125, 42, 52, 21, 14];

const add = (a, b) => {
  const newArray = [...a, ...b];
  const maxValue = Math.max(...newArray);
  return maxValue;
};

console.log(add(arr1, arr2));
