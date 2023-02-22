import React, { useState, useEffect } from 'react';
import './App.css';
import Figure from './components/Figure';
import Header from './components/Header';
import Help from './components/Help';
import Popup from './components/Popup';
import Word from './components/Word';
import WrongLetters from './components/WrongLetters';

function App() {
  // initialising 'playable' variable which manages the game state, its initial value is set to 'true' which means the user can play the game, if he loses or wins, setPayable function updates its value to 'false' and the user cannot play anymore
  const [playable, setPlayable] = useState(true)
  // correctLetters array to store correct letters from user's input
  const [correctLetters, setCorrectLetters] = useState([])
  // wrongLetters array to store wrong letters
  const [wrongLetters, setWrongLetters] = useState([])
  // selectedWord variable to store the word to guess. Initially, the value of selectedWord is an empty string, and it is updated by an useEffect hook that fetches a random word from an API and sets it as the value of selectedWord state variable. 
  const [selectedWord, setSelectedWord] = useState('');
  // The showHelp variable is used to control whether the help component should be displayed or not. The initial value of showHelp is set to false, which means that the help component is hidden by default when the app is first loaded. When the user clicks the "Help" button, the handleHelpClick function is called, which toggles the value of showHelp between true and false using the setShowHelp function. This causes the help component to be displayed or hidden accordingly.
  const [showHelp, setShowHelp] = useState(false);

  // fetch a random word from API and assign it to selectedWord variable via setSelectedWord function
  useEffect(() => {
    async function fetchWord() {
      const response = await fetch('https://random-word-api.herokuapp.com/word');
      const words = await response.json();
      setSelectedWord(words[0]);
    }
    fetchWord();
  }, []);

  // When a key is pressed, the handleKeydown function is called, which checks if the key pressed is a letter between 'a' and 'z', and if it is, adds the letter to the list of correct or wrong letters depending on whether it is present in the selected word or not.
  useEffect(() => {
    const handleKeydown = event => {
      const {key, keyCode} = event
      if (playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
    
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setCorrectLetters(currentLetters => [...currentLetters, letter])
            } else {
              alert("You have already entered this letter!")
            }
          } else {
            if (!wrongLetters.includes(letter)) {
              setWrongLetters(wrongLetters => [...wrongLetters, letter])
    
            } else {
              alert("You have already entered this letter!")
            }
          }
        }
    }
    window.addEventListener('keydown', handleKeydown)

    // adding a cleanup function inside the useEffect hook to remove the event listener when the component is unmounted or updated. The second argument of the useEffect hook is an array of dependencies that the effect depends on. In this case, the effect depends on the correctLetters, wrongLetters, and playable states, which means that if any of these values change, the effect will be re-run with the updated values.
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [correctLetters, wrongLetters, playable])

  const handleHelpClick = () => {
    setShowHelp(show => !show);
  }

  return (
    <div className="App">
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} />
      <button className = "helpBtn" onClick={handleHelpClick}>Help</button>
      {showHelp && <Help />}
      <Help showHelp={showHelp} />
    </div>
  );
}

export default App;
