const { useState } = React;

export function Board() {

  const [squares, setSquares] = useState(Array(9).fill(""));
  const [x, setX] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");

  const handleClick = (index) => {

    if (squares[index] !== "" || gameOver) return;

    const newSquares = [...squares];
    newSquares[index] = x ? "X" : "O";

    setSquares(newSquares);
    setX(!x);

    checkWinner(newSquares);
  };

  const checkWinner = (board) => {

    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for (let [a,b,c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setMessage("Winner: " + board[a]);
        setGameOver(true);
        return;
      }
    }

    if (board.every(square => square !== "")) {
      setMessage("Draw");
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setSquares(Array(9).fill(""));
    setX(true);
    setGameOver(false);
    setMessage("");
  };

  return (
    <div>

      <h2>{message}</h2>

      <section>
        <button className="square" onClick={() => handleClick(0)}>{squares[0]}</button>
        <button className="square" onClick={() => handleClick(1)}>{squares[1]}</button>
        <button className="square" onClick={() => handleClick(2)}>{squares[2]}</button>
      </section>

      <section>
        <button className="square" onClick={() => handleClick(3)}>{squares[3]}</button>
        <button className="square" onClick={() => handleClick(4)}>{squares[4]}</button>
        <button className="square" onClick={() => handleClick(5)}>{squares[5]}</button>
      </section>

      <section>
        <button className="square" onClick={() => handleClick(6)}>{squares[6]}</button>
        <button className="square" onClick={() => handleClick(7)}>{squares[7]}</button>
        <button className="square" onClick={() => handleClick(8)}>{squares[8]}</button>
      </section>

      <button id="reset" onClick={resetGame}>Reset Game</button>

    </div>
  );
}