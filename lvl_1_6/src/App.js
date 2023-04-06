import { useState } from "react";
import "./App.css";

function App() {
  const [inputResult, setInputResult] = useState([
    {
      Vorname: "",
      Nachname: "",
      Email: "",
    },
  ]);

  return (
    <div className="App">
      <form action="">
        <ul>
          {inputResult.map((result, index) => {
            return (
              <div key={index}>
                <input
                  type="text"
                  name="vorname"
                  value={result.Vorname}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    setInputResult((prevInputResult) => {
                      const newInputResult = [...prevInputResult];
                      newInputResult[index].Vorname = newValue;
                      return newInputResult;
                    });
                  }}
                />
                <input
                  type="text"
                  name="nachname"
                  value={result.Nachname}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    setInputResult((prevInputResult) => {
                      const newInputResult = [...prevInputResult];
                      newInputResult[index].Nachname = newValue;
                      return newInputResult;
                    });
                  }}
                />

                <input
                  type="email"
                  name="email"
                  value={result.Email}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    setInputResult((prevInputResult) => {
                      const newInputResult = [...prevInputResult];
                      newInputResult[index].Email = newValue;
                      return newInputResult;
                    });
                  }}
                />

                <li>{`Vorname: ${result.Vorname}`}</li>
                <li>{`Nachname: ${result.Nachname}`}</li>
                <li>{`Email: ${result.Email}`}</li>
              </div>
            );
          })}
        </ul>
      </form>
    </div>
  );
}

export default App;
