import { useEffect, useMemo, useRef, useState } from "react";
import Player from "../Player/Player";

export default function App() {
  //   const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
  //   const [query, setQuery] = useState("");
  //     const [clicks, setClicks] = useState(0);
  // const [value, setValue] = useState(0);
  // const btnRef = useRef();
  const valueRef = useRef(0);

  useEffect(() => {
    console.log(valueRef.current);
  });

  const handleClick = () => {
    valueRef.current += 1;
  };

  // console.log("App: ", btnRef.current);

  // useEffect(() => {
  //   console.log("useEffect: ", btnRef.current);
  // });

  // const handleClick = () => {
  //   console.log("handleclick: ", btnRef.current);
  // };

  // const filteredPlanets = useMemo(() =>
  //     planets.filter((planet) => planet.includes(query)),
  //         [planets, query]
  //);

  return (
    <>
    <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
<button onClick={handleClick}>Click to update ref value</button>
      {/* <button onClick={() => setValue(value + 1)}>
        Update value to trigger re-render
      </button>
      <button ref={btnRef} onClick={handleClick}>
        Button with ref
      </button> */}
      {/* <button onClick={() => setClicks(clicks + 1)}>
        Number of clicks: {clicks}
      </button>
      <ul>
        {filteredPlanets.map((planet) => (
          <li key={planet}>{planet}</li>
        ))}
      </ul> */}
    </>
  );
}
