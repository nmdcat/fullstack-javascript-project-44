import mainEngine from '../index.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function calculateGCD(expression) {
  const [a, b] = expression.split(' ').map((num) => parseInt(num, 10));

  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error( "Invalid input. Please provide two numbers separated by a space." );
  }
  // Функция для вычисления НОД с помощью алгоритма Евклида//
  function gcd(a, b) {
    const absA = Math.abs(a);
    const absB = Math.abs(b);

    if (absB === 0) {
      return absA;
    }

    return gcd(absB, absA % absB);
  }
  return gcd(absA, absB);
}

function generateQuestion() {
  const num1 = getRandomInt(100);
  const num2 = getRandomInt(100);

  const question = `${num1} ${num2}`;
  const correctAnswer = calculateGCD(question);
  return [question, correctAnswer];
}

function checkAnswer(question, userAnswer, correctAnswer) {
  return userAnswer === correctAnswer.toString();
}

export default function brainGCD() {
  const questionPhrase = 'Find the greatest common divisor of given numbers.';
  mainEngine(questionPhrase, checkAnswer, generateQuestion);
};
