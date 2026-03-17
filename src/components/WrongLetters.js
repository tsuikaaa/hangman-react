import React from 'react'

const WrongLetters = ({ wrongLetters }) => {
    return (
        <div className="wrong-letters-container">
            <div>
                {wrongLetters.length > 0 && <p>Wrong</p>}
                {wrongLetters
                    .reduce((prev, curr) => (prev === null ? [curr] : [...prev, ', ', curr]), null)
                    ?.map((item, i) => <span key={i}>{item}</span>)}
            </div>
        </div>
    )
}

export default WrongLetters;