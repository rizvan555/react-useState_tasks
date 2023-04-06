import "./App.css";
import { useState } from "react";

function App() {
  const [light, setLight] = useState(true);

  return (
    <div
      className="app"
      style={{
        color: light ? "black" : "white",
        backgroundColor: light ? "lightblue" : "black",
      }}
    >
      <h1 className="tag" style={{ display: light ? "block" : "none" }}>
        Es ist Tag 🌞
      </h1>
      <h1 className="nacht" style={{ display: light ? "none" : "block" }}>
        Es ist Nacht 🌒
      </h1>
      <button
        onClick={() => {
          setLight(!light);
        }}
      >
        {light ? "Wechsel zu Nacht" : "Wechsel zu Tag"}
      </button>
    </div>
  );
}

export default App;
