import { useEffect, useState } from "react";
import css from "./App.module.css";
import getRandomHexColor from "../../utils/getRandomHexColor";

export default function App() {
  const [clicks, setClicks] = useState(0);
  //   const color = clicks % 5 === 0 ? "orangred" : "skyblue";

  useEffect(() => {
    // console.log("bg color useEffect", color);
    document.body.style.backgroundColor = getRandomHexColor();
  }, [clicks]);

  return (
    <div className={css.container}>
      <h1>Effects in React</h1>
      <button onClick={() => setClicks(clicks + 1)}>Clicks {clicks}</button>
    </div>
  );
}
