import readlineSync from "readline-sync";
import { getUserName, greeting } from "./cli.js";
import greetUser from "./cli.js";

export default function mainEngine(questionPhrase, checkAnswer, generateQuestion) {
  
  greeting();
  greetUser();

  const name = getUserName();

  console.log(questionPhrase);

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const [question, correctAnswer] = generateQuestion();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question("Your answer: ");
    const isCorrect = checkAnswer(question, userAnswer, correctAnswer);

    if (isCorrect) {
      console.log("Correct!");
      correctAnswers += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
