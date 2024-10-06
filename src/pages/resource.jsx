import { useState, useEffect } from "react";

const GamePage = () => {
  // State for score, progress, and game status
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  // Start game function
  const handleStartGame = () => {
    setGameStarted(true);
  };

  // Increment score and progress
  const handleIncrement = () => {
    if (score < 100) {
      setScore(score + 10);
      setProgress(progress + 10);
    }
  };

  // Reset game state
  const handleReset = () => {
    setScore(0);
    setProgress(0);
    setGameStarted(false);
  };

  // Check if score reaches 100 to show win message
  useEffect(() => {
    if (score === 100) {
      alert("Congrats! You won!");
    }
  }, [score]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <h1 className="text-4xl font-bold mb-8">🎮 Gamify It!</h1>
      <div className="w-full max-w-lg">
        {/* Progress Bar */}
        <div className="h-6 w-full bg-gray-300 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-green-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {/* Scoreboard */}
        <div className="text-2xl mb-6">
          <span className="font-semibold">Score: </span>
          <span className="text-yellow-300">{score}</span>/100
        </div>

        {/* Game Buttons */}
        <div className="flex space-x-4">
          {!gameStarted ? (
            <button
              className="bg-blue-600 hover:bg-blue-800 transition duration-300 text-white py-2 px-4 rounded-lg"
              onClick={handleStartGame}
            >
              Start Game
            </button>
          ) : (
            <button
              className="bg-green-600 hover:bg-green-800 transition duration-300 text-white py-2 px-4 rounded-lg"
              onClick={handleIncrement}
            >
              Increment
            </button>
          )}

          <button
            className="bg-red-600 hover:bg-red-800 transition duration-300 text-white py-2 px-4 rounded-lg"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>

        {/* Message when the game is completed */}
        {score === 100 && (
          <p className="mt-4 text-xl font-bold animate-bounce">
            🎉 You completed the game! 🎉
          </p>
        )}
      </div>
    </div>
  );
};

export default GamePage;
