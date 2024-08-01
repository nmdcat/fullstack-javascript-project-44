import readlineSync from 'readline-sync';

let userName = "";

export function greeting() {
    console.log("Welcome to the Brain Games!");
}

export function getUserName() {
  if (!userName) {
    userName = readlineSync.question("May I have your name? ");
  }
  return userName;
}

export default function greetUser() {
    const name = getUserName();
    console.log(`Hello, ${name}!`);
    return name;
}