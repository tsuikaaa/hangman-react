import React from 'react'

const Header = ({ onPlay }) => {
  return (
    <div className="box">
      <h1>Hangman</h1>
      <p>Find the hidden word by guessing letters!</p>
      <button className="play-btn" onClick={onPlay}>
        Play
      </button>
    </div>
  )
}

export default Header