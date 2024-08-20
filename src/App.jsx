import { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import MyComponent from "./MyComponent";

// export default function App() {
//   const [clicks, setClicks] = useState(0);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>You clicked {clicks} times</button>
//   );
// };

export default function App() {
const handleLogin = (userData) => {
  console.log(userData);
};

return (
  <div>
    <h1>Please login to your acccount!</h1>

    <LoginForm onLogin={handleLogin} />

    <MyComponent/>
  </div>
);
};