import mainEngine from "../index.js";

//вспомогательные функции
function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

const operations = ["+", "-", "*"];

function getRandomOperation() {
  return operations[Math.floor(Math.random() * operations.length)];
}

function expressionCalc() {
  const num1 = getRandomInt(100);
  const num2 = getRandomInt(100);
  const operation = getRandomOperation();

  return `${num1} ${operation} ${num2}`;
}

function calculateCorrectAnswer(expression) {
  const [num1, operation, num2] = expression.split(" ");
  const a = parseInt(num1);
  const b = parseInt(num2);

  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    default:
      throw new Error("Unknown operation");
  }
}

function generateQuestion() {
  const question = expressionCalc();
  const correctAnswer = calculateCorrectAnswer(question);
  return [question, correctAnswer];
}
//
function checkAnswer(question, userAnswer, correctAnswer) {
  return userAnswer === correctAnswer.toString();
}

export default function brainCalc() {

  const questionPhrase = "What is the result of the expression?";
  mainEngine(questionPhrase, checkAnswer, generateQuestion);
}