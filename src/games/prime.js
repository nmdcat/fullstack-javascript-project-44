import mainEngine from "../index.js";

//вспомогательные функции

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function generateQuestion() {
  const number = getRandomInt(2, 100);
  const correctAnswer = isPrime(number) ? "yes" : "no";
  return [number.toString(), correctAnswer];
}

function checkAnswer(question, userAnswer, correctAnswer) {
  return userAnswer.toLowerCase() === correctAnswer;
}

export default function brainPrime() {
    
  const questionPhrase = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  mainEngine(questionPhrase, checkAnswer, generateQuestion);
}