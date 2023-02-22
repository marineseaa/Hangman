import React, {useEffect} from 'react'

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable}) => {
    let finalMessage = ''
    let finalMessageRevealWord = ''
    let playable = true

    function checkWin(correct, wrong, word) {
        let status = 'win'

        // if the correct array doesn't include the current letter, the status variable is set to an empty string, indicating that the user has not yet won the game.
        word.split('').forEach(letter => {
            if(!correct.includes(letter)) {
                status = ''
            }
        })
        // the function checks whether the length of the wrong array is equal to 11. If it is, the status variable is set to 'lose', indicating that the user has lost the game.
        if(wrong.length === 11) status = 'lose'

        // the function returns status
        return status
    }

    // depending on the status different messages are to the finalMessage which is displayed in the popup
    if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
        finalMessage = 'Congratulations! You won!'
        playable = false
    }
    else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
        finalMessage = 'Unfortunately you lost!'
        finalMessageRevealWord = `The word was: ${selectedWord}`
        playable = false
    }

    useEffect(() => setPlayable(playable))

  return (
    <div className="popup-container" style = {finalMessage !== '' ? {display: 'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={() => window.location.reload()}>Play Again</button>
      </div>
    </div>
  )
}

export default Popup
