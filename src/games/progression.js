import mainEngine from "../index.js";

//вспомогательные функции

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {
  const length = getRandomInt(5, 10);
  const start = getRandomInt(1, 100);
  const step = getRandomInt(1, 10);

  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + step * i);
  }

  const hiddenIndex = getRandomInt(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = "..";

  const question = progression.join(" ");
  return [question, correctAnswer];
}


function checkAnswer(question, userAnswer, correctAnswer) {
  return userAnswer === correctAnswer;
}

export default function brainProgression() {

  const questionPhrase = "What number is missing in the progression?";
  mainEngine(questionPhrase, checkAnswer, generateQuestion);

};