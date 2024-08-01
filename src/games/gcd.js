import mainEngine from '../index.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function calculateGCD(expression) {
  const [a, b] = expression.split(" ").map((num) => {
    const parsed = parseInt(num, 10);
    if (Number.isNaN(parsed)) {
      throw new Error('Invalid input. Please provide two numbers separated by a space.');
    }
    return Math.abs(parsed);
  });

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  return gcd(a, b);
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
}
