import React, { useState } from "react";
import TabButtons from "./TabButtons.jsx";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

function Examples() {
  const [selectedButton, setSelectedButton] = useState("");

  const handleClick = (data) => {
    setSelectedButton(data);
  };

  let tabContent = <p> Please select a topic.</p>;
  if (selectedButton) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedButton].title}</h3>
        <p>{EXAMPLES[selectedButton].description}</p>
        <pre>
          <code>{EXAMPLES[selectedButton].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        ButtonsContainer="menu"
        buttons={
          <>
            <TabButtons
              onSelect={() => handleClick("components")}
              isActive={selectedButton === "components"}
            >
              Components
            </TabButtons>
            <TabButtons
              onSelect={() => handleClick("jsx")}
              isActive={selectedButton === "jsx"}
            >
              JSX
            </TabButtons>
            <TabButtons
              onSelect={() => handleClick("props")}
              isActive={selectedButton === "props"}
            >
              Props
            </TabButtons>
            <TabButtons
              onSelect={() => handleClick("state")}
              isActive={selectedButton === "state"}
            >
              State
            </TabButtons>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}

export default Examples;
