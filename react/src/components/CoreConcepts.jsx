import React from "react";
import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";
import Section from "./Section.jsx";

function CoreConcepts() {
  return (
    <Section title="Core Conceptions" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((data) => (
          <CoreConcept key={data.title} {...data} />
        ))}
      </ul>
    </Section>
  );
}

export default CoreConcepts;
