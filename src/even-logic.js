import readlineSync from "readline-sync";
import { getUserName } from "./cli.js";

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function isEven(num) {
  return num % 2 === 0 ? "yes" : "no";
}

export default function brainEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const name = getUserName();

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const number = getRandomInt(100);
    console.log(`Question: ${number}`);

    const userAnswer = readlineSync.question("Your answer: ");
    const correctAnswer = isEven(number);
    
    if (userAnswer === correctAnswer) {
        console.log('Correct!');
        correctAnswers += 1;
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}`);
        return;
    }
  }
   console.log(`Congratulations, ${name}!`);
}

