import React from 'react'

// The selected word is first split into an array of letter. Then, for each letter in the array, a span element is created. The key prop is set to the index of the current letter in the array.If the correctLetters array includes the current letter, then the span element will display the letter. Otherwise, it will display an empty string.
function Word ({ selectedWord, correctLetters}) {
  return (
    <div className="word">
        {selectedWord.split('').map((letter, i) => {
            return (
                <span className="letter" key = {i}>
                    {correctLetters.includes(letter) ? letter : ''}
                </span>
            )
        })}
    </div>
  )
}

export default Word
