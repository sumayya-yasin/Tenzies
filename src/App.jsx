import { useState, useRef } from "react"
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'
import Die from "./components/Die"

export default function App() {
  const { width, height } = useWindowSize()
  const [dice, setDice] = useState(() => generateAllNewDice());
  const buttonRef = useRef(null);

  const gameWon = dice.every(die => die.isHeld === true) ? true : false && dice.every(die => die.value === dice[0].value) ? true : false;

  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon]);


  function generateAllNewDice() {
    const newDice = [];
    let randomNumber;
    for (let i = 0; i < 10; i++) {
      randomNumber = Math.floor(Math.random() * 6) + 1;
      let newValue = { id: i, value: randomNumber, isHeld: false };
      newDice.push(newValue);
    }
    return newDice;
  }

  function rollDice() {
    if (buttonText === "Roll") {
      setDice(prevDice => prevDice.map(die =>
        die.isHeld ?
          die :
          { ...die, value: Math.floor(Math.random() * 6) + 1 }
      ))
    }
    if (buttonText === "New Game")
      setDice(generateAllNewDice());
  }

  function toggleHeld(id) {
    setDice(prevDice =>
      prevDice.map(die => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    )
  }

  const generateDice = dice.map(die => <Die key={die.id} id={die.id} value={die.value} isHeld={die.isHeld} toggleHeld={toggleHeld} />)
  const buttonText = gameWon ? "New Game" : "Roll";

  return (
    <>
      {gameWon && <Confetti width={width} height={height} />}
      <div aria-live="polite" className="sr-only">
        {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
      </div>
      <main className="main-container">
        <h1>Tenzies</h1>
        <p> Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="die-container">
          {generateDice}
        </div>
        <button ref={buttonRef} className="main-container__button" onClick={rollDice}>{buttonText}</button>
      </main>
    </>)
}
