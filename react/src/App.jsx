import { useState } from "react";
import CoreConcept from "./components/CoreConcept.jsx";
import Header from "./components/Header/Header.jsx";
import TabButtons from "./components/TabButtons.jsx";
import { CORE_CONCEPTS } from "./data.js";

function App() {
  const [selectedButton, setSelectedButton] = useState("Components");

  const handleClick = (data) => {
    setSelectedButton(data);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((data) => (
              <CoreConcept
                key={data.title}
                title={data.title}
                description={data.description}
                image={data.image}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons onSelect={() => handleClick("Components")}>
              Components
            </TabButtons>
            <TabButtons onSelect={() => handleClick("JSX")}>JSX</TabButtons>
            <TabButtons onSelect={() => handleClick("Props")}>Props</TabButtons>
            <TabButtons onSelect={() => handleClick("State")}>State</TabButtons>
          </menu>
        </section>
        {selectedButton}
      </main>
    </div>
  );
}

export default App;
