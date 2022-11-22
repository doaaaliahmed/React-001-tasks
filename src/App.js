import { useState } from "react";
import "./App.css";

const App = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const enteredTextHandler = (e) => setText(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();

    if (text.trim() === "") return;

    setList((prevItem) => [...prevItem, text]);
    setText("");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <input type="text" onChange={enteredTextHandler} value={text} />
          <button>Submit</button>
        </div>
      </form>
      {list.length > 0 && (
        <ul>
          {list.map((l,i) => (
            <li key={`k${i}`}>{l}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default App;
