import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ animal: animalInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setAnimalInput("");
  }
  return (
    <div>
      <Head>
        <title>DMSI LAB</title>
        <link rel="icon" href="https://icons.iconarchive.com/icons/fa-team/fontawesome/512/FontAwesome-Otter-icon.png" />
      </Head>

      <main className={styles.main}>
        <img src="https://icons.iconarchive.com/icons/fa-team/fontawesome/512/FontAwesome-Otter-icon.png" className={styles.icon} />
        <h3>Un mote para mi mascota</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Introduce un animal"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input type="submit" value="Generar nombres" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}

function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}
