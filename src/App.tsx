import { useState } from "react"
import words from "./wordList.json"


import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";


function App() {
  // spits out a random goal word
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random()*words.length)]
  })
  // stores user input as an array of strings
  const [guessedLetters, setGuessedLetters] = useState<string[]>(["t"])

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center"
      }}
    >
      <div style={{fontSize: "2rem", textAlign: "center"}}>
        Loseuwhd
        Win
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <div style={{alignSelf: "stretch"}}>
        <Keyboard/>
      </div>

    </div>
  )
}

export default App
