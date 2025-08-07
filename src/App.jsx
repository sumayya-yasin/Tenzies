import { useState, useRef, useEffect } from "react"
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'
import Die from "./components/Die"
import Footer from "./components/Footer"

export default function App() {
  const storedBestScore = parseInt(localStorage.getItem("bestScore")) || Infinity;
  const { width, height } = useWindowSize()
  const [dice, setDice] = useState(() => generateAllNewDice());
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(storedBestScore);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [showCongratsBox, setShowCongratsBox] = useState(false); // 🎉 Overlay state
  const buttonRef = useRef(null);

  const gameWon = dice.every((die) => die.isHeld && die.value === dice[0].value);

  useEffect(() => {
    if (gameWon) {
      if (score < bestScore) {
        localStorage.setItem("bestScore", score);
        setBestScore(score);
      }
      buttonRef.current?.focus();
    }
  }, [gameWon, score, bestScore]);

  function generateAllNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      newDice.push({ id: i, value: randomNumber, isHeld: false });
    }
    return newDice;
  }

  function rollDice() {
    if (buttonText === "Roll") {
      setDice(prevDice => prevDice.map(die =>
        die.isHeld ? die : { ...die, value: Math.floor(Math.random() * 6) + 1 }
      ));
      setScore(prevScore => prevScore + 1);
    }

    if (buttonText === "New Game") {
      setIsButtonDisabled(true);
      setShowCongratsBox(true);

      setTimeout(() => {
        if (score < bestScore || bestScore === 0) {
          localStorage.setItem("bestScore", score);
        }
        setDice(generateAllNewDice());
        setScore(0);
        setIsButtonDisabled(false);
        setShowCongratsBox(false);
      }, 2100);
    }
  }

  function toggleHeld(id) {
    setDice(prevDice =>
      prevDice.map(die => die.id === id ? { ...die, isHeld: !die.isHeld } : die)
    );
  }

  const generateDice = dice.map(die =>
    <Die key={die.id} id={die.id} value={die.value} isHeld={die.isHeld} toggleHeld={toggleHeld} />
  );

  const buttonText = gameWon ? "New Game" : "Roll";

  return (
    <>
      {gameWon && <Confetti width={width} height={height} />}

      {showCongratsBox && (
        <div className="congrats-overlay">
          🎉 Congratulations! You won! Starting new game...
        </div>
      )}

      <div aria-live="polite" className="sr-only">
        {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
      </div>

      <main className="main-container">
        <h1>Tenzies</h1>
        <div className="main-container__score-container">
          <p>Rolls: <span>{score}</span></p>
          <p>Best Rolls: <span>{bestScore === Infinity ? "-" : bestScore}</span></p>
        </div>
        <p className="main-container__paragraph">
          Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
        </p>
        <div className="die-container">
          {generateDice}
        </div>
        <button
          ref={buttonRef}
          className={`main-container__button ${gameWon ? "new-game" : "roll"}`}
          onClick={rollDice}
          disabled={isButtonDisabled}
        >
          {buttonText}
        </button>
      </main>
      <Footer />
    </>
  );
}
