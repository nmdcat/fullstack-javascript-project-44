[![Actions Status](https://github.com/nmdcat/fullstack-javascript-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/nmdcat/fullstack-javascript-project-44/actions)

<a href="https://codeclimate.com/github/nmdcat/fullstack-javascript-project-44/maintainability"><img src="https://api.codeclimate.com/v1/badges/84b3c14d76085067c804/maintainability" /></a>

# Brain Games

Brain Games is a collection of five console-based cognitive training games inspired by popular mobile brain-training applications.

## Overview

- Each game presents a series of questions that challenge different cognitive skills.
- Players must provide correct answers to progress.
- Successfully answering three questions in a row completes the game.
- An incorrect answer ends the current session, prompting the player to start over.

These games are designed to exercise your mind and improve cognitive abilities through engaging, quick-fire challenges.

## Installation

To set up the Brain Games project on your local machine, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/nmdcat/fullstack-javascript-project-44.git
   ```

2. Navigate to the project directory:
   ```
   cd fullstack-javascript-project-44
   ```

3. Install dependencies:
   ```
   install
   ```

4. Link the package to use game commands globally:
   ```
   npm link
   ```

After completing these steps, you should be able to run any of the games using their respective commands (e.g., `brain-calc`, `brain-progression`, etc.) from anywhere in your terminal.

## Requirements

- Node.js (version 12 or higher recommended)
- npm (usually comes with Node.js)

Make sure you have Node.js and npm installed on your system before proceeding with the installation.


## Games Included

* **🧠 Calculator** (`brain-calc`)
  - Solve arithmetic expressions and test your calculation skills.
  [![asciicast](https://asciinema.org/a/pERLlGi41raBJQf23lJgl4S18.svg)](https://asciinema.org/a/pERLlGi41raBJQf23lJgl4S18)

* **🧠 Progression** (`brain-progression`)
  - Find the missing number in a sequence of numbers.
  [![asciicast](https://asciinema.org/a/aK1WILplGxNkiAzxPbAEo0G0o.svg)](https://asciinema.org/a/aK1WILplGxNkiAzxPbAEo0G0o)

* **🧠 Even or Odd** (`brain-even`)
  - Determine whether a given number is even or odd.
  [![asciicast](https://asciinema.org/a/ztOHFtsYK01JMvVVnor0zDquT.svg)](https://asciinema.org/a/ztOHFtsYK01JMvVVnor0zDquT)

* **🧠 Greatest Common Divisor** (`brain-gcd`)
  - Calculate the greatest common divisor of two numbers.
  [![asciicast](https://asciinema.org/a/76hTKaIiP29nUHCHcGHm3wTpQ.svg)](https://asciinema.org/a/76hTKaIiP29nUHCHcGHm3wTpQ)

* **🧠 Prime Number** (`brain-prime`)
  - Identify whether a number is prime or not.
  [![asciicast](https://asciinema.org/a/UCPt4IYdtrocWBnpd5JB48aaA.svg)](https://asciinema.org/a/UCPt4IYdtrocWBnpd5JB48aaA)

To start a game, use the corresponding command in your terminal. For example, to play the Calculator game, type:

```
brain-calc
```