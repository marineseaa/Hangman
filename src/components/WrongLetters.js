import React from 'react'

const WrongLetters = ({wrongLetters}) => {
  return (
    <div className="wrong-letters-container">
        <div>
            {/*  checks if the wrongLetters array length is greater than 0, <p>Wrong</p> is returned, otherwise nothing will be displayed) */}
            {wrongLetters.length > 0 && <p>Wrong</p>}
            {wrongLetters.
            map((letter, i) => <span key={i}>{letter}</span>)
            .reduce((prev, curr) => prev === null ? [curr] : [prev, ',', curr], null)}
        </div> 
    </div>
  )
}

export default WrongLetters
