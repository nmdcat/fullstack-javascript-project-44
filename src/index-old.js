import readlineSync from "readline-sync";
import { getUserName, greeting } from "./cli.js";

export default function mainEngine(
  questionPhrase,
  condition,
  generateQuestion
) {
  greeting();
  getUserName();

  console.log(questionPhrase);
  const name = getUserName();

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const questionVariant = generateQuestion();
    console.log(`Question: ${questionVariant}`);

    const userAnswer = readlineSync.question("Your answer: ");
    const correctAnswer = condition(questionVariant);

    if (userAnswer == correctAnswer) {
      console.log("Correct!");
      correctAnswers += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
