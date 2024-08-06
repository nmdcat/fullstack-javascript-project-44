import readlineSync from 'readline-sync';
import makeWelcome from './cli.js';

export default function mainEngine(questionPhrase, checkAnswer, generateQuestion) {
  const name = makeWelcome();

  console.log(questionPhrase);

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateQuestion();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const isCorrect = checkAnswer(question, userAnswer, correctAnswer);

    if (isCorrect) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
