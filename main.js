let length = prompt("Введіть довжину масиву:");

const array = [];

for (let i = 0; i < length; i++) {
array.push (+prompt("Введіть елемент масиву №" + (i + 1) + ":"));
array.sort();
array.sort(function(a, b){return a - b});
console.log(array);
}

array.splice(2, 3);
alert(array);

