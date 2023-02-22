import React from 'react'

// this component contains simple Hangman game rules and it's displayed when help button is clicked
const Help = ({ showHelp }) => {
    console.log('Help component is rendered');
    return (
      <div className="help-container" style={{ display: showHelp ? 'block' : 'none' }}>
        <div className="help">
          <h2>Hangman Game Rules</h2>
          <ul>
            <li>Enter one letter at a time.</li>
            <li>You have 11 incorrect guesses before the hangman is fully drawn.</li>
            <li>Have fun!</li>
          </ul>
        </div>
      </div>
    )
  }

export default Help
