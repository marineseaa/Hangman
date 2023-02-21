# Hangman Game for One Player
This is a simple implementation of the classic game of Hangman for one player, created using the React library. The objective of the game is to guess a hidden word by suggesting letters, with each incorrect guess leading to the drawing of a new part of a hanging man.

# Getting Started
To get started with the game, follow these steps:

* Clone the repository to your local machine using git clone.
* Navigate to the project directory in your terminal.
* Install the necessary dependencies by running the command npm install.
* Start the development server by running the command npm start.
* Open your browser and navigate to http://localhost:3000 to play the game.

# How to Play
When you first load the game, you will see a blank space for each letter in the hidden word, along with a drawing of a hanging man. To make a guess, simply click any letter on the keyboard.

If the letter is present in the hidden word, it will be revealed in the corresponding blank space. If it is not present in the hidden word, a new part of the hanging man will be drawn. The game ends when you either guess the entire word or the hanging man is fully drawn.

If you guess the entire word, you win the game and will be presented with a congratulatory message. If the hanging man is fully drawn, you lose the game and will be presented with a message indicating the correct word.

To play again, simply click on the "Play Again" button at the end of the game.

# Technologies Used
This game was created using the React library, along with HTML, CSS, and JavaScript. The project was bootstrapped using Create React App.
