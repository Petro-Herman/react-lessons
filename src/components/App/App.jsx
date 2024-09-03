import { useEffect, useMemo, useRef, useState } from "react";

export default function App() {
  //   const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
  //   const [query, setQuery] = useState("");
  //     const [clicks, setClicks] = useState(0);
  const [value, setValue] = useState(0);
  const btnRef = useRef();

  console.log("App: ", btnRef.current);

  useEffect(() => {
    console.log("useEffect: ", btnRef.current);
  });

  const handleClick = () => {
    console.log("handleclick: ", btnRef.current);
  };

  // const filteredPlanets = useMemo(() =>
  //     planets.filter((planet) => planet.includes(query)),
  //         [planets, query]
  //);

  return (
    <>
      <button onClick={() => setValue(value + 1)}>
        Update value to trigger re-render
      </button>
      <button ref={btnRef} onClick={handleClick}>
        Button with ref
      </button>
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
