// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React amazing!</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;

// const App = () => {
//   const hadleClick = () => {
//     alert("I'm a button!");
//   };

//   return <button onClick={() => hadleClick()}>Click me!</button>;
// };

// const App = () => {
//   return <button onClick={() => alert("I'm a button!")}>CLick me!</button>;
// };

const App = () => {
  const handleClick = (evt) => {
    console.log(evt);
  };

  return (
    <>
      <button onClick={handleClick}>First button</button>
      <button onClick={(evt) => console.log(evt)}>Second button</button>
    </>
  );
};

export default App;
