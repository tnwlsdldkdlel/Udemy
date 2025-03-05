import Header from "./components/Header/Header.jsx";
import { CORE_CONCEPTS } from "./data.js";

function CoreConcepts({ title, description, img }) {
  return (
    <li>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((data) => (
              <CoreConcepts
                key={data.title}
                title={data.title}
                description={data.description}
                img={data.image}
              />
            ))}
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
