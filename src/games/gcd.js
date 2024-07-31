import mainEngine from "../index.js";

//вспомогательные функции
function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function generateQuestion() {
  const num1 = getRandomInt(100);
  const num2 = getRandomInt(100);

  return `${num1} ${num2}`;
}

function calculateGCD(expression) {
  const [a, b] = expression.split(" ").map((num) => parseInt(num, 10));

  if (isNaN(a) || isNaN(b)) {
    throw new Error(
      "Invalid input. Please provide two numbers separated by a space."
    );
  }
  // Функция для вычисления НОД с помощью алгоритма Евклида
  function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    if (b === 0) {
      return a;
    }

    return gcd(b, a % b);
  }
  return gcd(a, b);
}
//

export default function brainGCD () {

    const questionPhrase = "Find the greatest common divisor of given numbers.";
    mainEngine(questionPhrase, calculateGCD, generateQuestion)
};
