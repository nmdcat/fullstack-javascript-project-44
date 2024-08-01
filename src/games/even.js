import mainEngine from "../index.js";

//вспомогательные функции
function isEven(num) {
  return num % 2 === 0 ? "yes" : "no";
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}
//

function generateQuestion() {
  const question = getRandomInt(100);
  const correctAnswer = isEven(question);
  return [question, correctAnswer];
}

function checkAnswer(question, userAnswer, correctAnswer) {
  return userAnswer === correctAnswer;
}

export default function brainEven() {

  const questionPhrase = 'Answer "yes" if the number is even, otherwise answer "no".';

  mainEngine(questionPhrase, checkAnswer, generateQuestion);
};
