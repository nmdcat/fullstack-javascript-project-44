import mainEngine from "../index.js";

//вспомогательные функции
function isEven(num) {
  return num % 2 === 0 ? "yes" : "no";
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}
//

export default function brainEven() {

  const questionPhrase = 'Answer "yes" if the number is even, otherwise answer "no".';
  const generateQuestion = () => getRandomInt(100);

  mainEngine(questionPhrase, isEven, generateQuestion);
};
