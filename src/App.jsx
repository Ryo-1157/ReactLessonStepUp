import { useState } from "react";
import "./styles.css";
import { ChildArea } from "./components/index";

export default function App() {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevState) => prevState + 1);
  };
  const countDown = () => {
    setCount((prevState) => prevState - 1);
  };
  return (
    <div className="App">
      <input />
      <br />
      <br />
      <button>表示</button>
      <ChildArea></ChildArea>
    </div>
  );
}
