import React from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";

// 매번 생성될 필요가 없는 함수이기 때문. 상태를 변경하지 않아서.
function deriveActivePlayer(gameTurn) {
  let activePlayer = "X";

  if (gameTurn.length > 0 && gameTurn[0].player == "X") {
    activePlayer = "O";
  }

  return activePlayer;
}

function App() {
  const [players, setPlayers] = React.useState([
    { id: 1, name: "player 1", symbol: "X" },
    { id: 2, name: "player 2", symbol: "O" },
  ]);
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  const [gameBoard, setGameBoard] = React.useState(initialGameBoard);
  const [gameTurn, setGameTurn] = React.useState([]);
  let activePlayer = deriveActivePlayer(gameTurn);

  const handleEdit = ({ ...props }) => {
    setPlayers(
      players.map((player) =>
        player.id === props.id ? { ...player, ...props } : player
      )
    );
  };

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];

      // 위의 코드를 안쓰면 이전 상태와 같은 참조값을 갖는 배열을 반환하게 된다.
      // 그럼 리액트에선 이전 상태와 같은 값이라고 판단하여 렌더링이 되지 않는다.
      updatedBoard[rowIndex][colIndex] = activePlayer;
      return updatedBoard;
    });

    // 게임이 끝났는지 확인하는 로직을 추가할 수 있습니다.
    // 예를 들어, 게임이 끝났다면 게임 보드를 초기화하거나 승자를 표시하는 등의 작업을 수행할 수 있습니다.
    const isGameOver = WINNING_COMBINATIONS.some((combination) => {
      return combination.every((square) => {
        return gameBoard[square.row][square.col] === activePlayer;
      });
    });

    console.log(isGameOver);

    setGameTurn((prevTurn) => {
      const updatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurn,
      ];
      return updatedTurn;
    });
    activePlayer = deriveActivePlayer(gameTurn);
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {players.map((player) => (
            <Player
              key={player.name}
              name={player.name}
              symbol={player.symbol}
              id={player.id}
              onEdit={handleEdit}
              activePlayer={activePlayer}
            ></Player>
          ))}
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
      </div>
      <Log turns={gameTurn}></Log>
    </main>
  );
}

export default App;
