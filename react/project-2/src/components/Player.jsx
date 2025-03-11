import React from "react";

function Player({ name, symbol, index, onEdit }) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [player, setPlayer] = React.useState({ name, symbol, index });

  const handleEdit = () => {
    if (isEditing) {
      onEdit(player);
    }
    setIsEditing(!isEditing);
  };

  const handelChange = (e) => {
    setPlayer({ ...player, [e.target.id]: e.target.value });
  };

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            id="name"
            value={player.name}
            onChange={handelChange}
          />
        ) : (
          <span className="player-name">{player.name}</span>
        )}
        <span className="player-symbol">{player.symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
