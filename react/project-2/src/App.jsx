import React from "react";
import Player from "./components/Player";

function App() {
  const [players, setPlayers] = React.useState([
    { name: "player 1", symbol: "X" },
    { name: "player 2", symbol: "O" },
  ]);

  const handleEdit = ({ ...props }) => {
    console.log(props);
    setPlayers(
      players.map((player, index) =>
        player.index === index ? { ...player, ...props } : player
      )
    );
  };

  console.log(players);

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {players.map((player, index) => (
            <Player
              key={index}
              name={player.name}
              symbol={player.symbol}
              index={index}
              onEdit={handleEdit}
            ></Player>
          ))}
        </ol>
      </div>
      LOG
    </main>
  );
}

export default App;
