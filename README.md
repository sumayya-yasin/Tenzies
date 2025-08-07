
# Tenzies Game

A fast-paced dice game built with React — hold dice of the same value and keep rolling until all 10 match. This project was created as the capstone for the **Scrimba Learn React** course, with additional features like roll tracking, best score persistence, and confetti animations.

**Live Demo**  
🔗 [https://tenzies-game-pi-eight.vercel.app/](https://tenzies-game-pi-eight.vercel.app/)



##  Screenshots

<p align="center">
  <img src="./src/assets/game-start.PNG" alt="Tenzies Start Screen" width="400"/>
  <img src="/src/assets/holding-dice.PNG" alt="Holding Dice" width="400"/>
  <img src="/src/assets/confetti-win.PNG" alt="Winning Confetti" width="400"/>
</p>



##  Features

-  **Goal**: Match all 10 dice to the same number by holding and re-rolling.
-  **Click-to-Hold**: Choose which dice to keep between rolls.
-  **Roll Counter**: Tracks the number of rolls taken in each game.
-  **Best Score**: Stores the minimum rolls needed to win (persisted via `localStorage`).
-  **Confetti Animation**: Celebrates your win using `react-confetti`.
-  **Responsive UI**: Smooth experience across desktop and mobile.
-  **Built with React**: Utilizes `useState`, `useEffect`, and `useRef`.



##  Tech Stack

| Technology     | Description                                |
|----------------|--------------------------------------------|
| React          | Frontend library for building UI           |
| JavaScript     | Core scripting language                    |
| Vite           | Fast dev server and bundler                |
| localStorage   | Persists best score across sessions        |
| react-confetti | Adds celebratory animations on win         |
| Vercel         | Hosting platform for live deployment       |



##  Folder Structure

```
tenzies-game/
├── src/
│   ├── components/
│   ├── App.jsx
│   └── index.js
├── assets/
│   ├── game-start.png
│   ├── holding-dice.png
│   └── confetti-win.png
└── README.md
```


##  Installation & Setup

To run the project locally:

```bash
git clone https://github.com/your-username/tenzies-game.git
cd tenzies-game
npm install
npm run dev
```



##  Future Improvements

-  Add a timer to track speed-based best scores.
-  Add theme switcher (dark/light).
-  Add difficulty levels (e.g., match 12 dice).



## License

MIT License — free to use, modify, and extend with credit.

