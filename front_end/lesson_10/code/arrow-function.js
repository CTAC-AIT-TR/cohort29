// Стрелочная функция
// Пример обычной функции
function sum (a, b){
  return a + b
}
console.log(sum(20, 10)); // 30

// Такая же, но стрелочная
// блочная
const sum2 = (a, b) => {
  return a + b;
};

// Можно ли записать в одну строку?
// строчная
const sum3 = (a, b) => a + b;
// 
const res = sum3(10, 20); // 30

// Передача функции в качестве параметра
function calculate(a, b, operation){
  return operation(a, b);
}

function subtract (a, b){
  return a - b;
}
// Вызов
calculate(9, 3, subtract); // 6
// деление 
calculate(9, 3, (a, b) => a / b); // 3

// Создать метод universalGreeting, этот метод будет приветствовать на разных языках
// Пусть метод метод принимает в качестве параметров
// - имя 
// - функция приветствия. 

// Напишите две функции приветсвия:
// - одна пусть приветсвует на английском englishGreeting: "Hello, <имя>"
// - вторая пусть на японском japaneseGreeting: "Konishua, <имя>"

// Вызовите метод universalGreeting

function universalGreeting(name, greetingFunction){
  return greetingFunction(name);
}

function englishGreeting(name){
  return `Hello, ${name}`; // шаблонная строка - backtick
}

const res2 = universalGreeting("Steven", englishGreeting);
console.log(res2);
const res3 = universalGreeting("Sayochi", (name) => `Konishua, ${name}`);
console.log(res3);
