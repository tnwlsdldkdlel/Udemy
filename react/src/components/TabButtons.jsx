import React from "react";

// children 으로하면 자동으로 태그사이의 값이 인자로 들어간다.
const TabButtons = ({ children, onSelect }) => {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
};

export default TabButtons;
