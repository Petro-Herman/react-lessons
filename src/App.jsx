// import { useState, useEffect } from "react";
import { useState } from "react";
import LangSwitcher from "./LangSwitcher";
import LoginForm from "./LoginForm";
import MyComponent from "./MyComponent";
import SearchBar from "./SearchBar";

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
  const [lang, setLang] = useState("uk");
  const [coffeeSize, setCoffeeSize] = useState("sm");

  const handleSizeChange = (evt) => {
    setCoffeeSize(evt.target.value);
  };

  const [hasAccepted, setHasAccepted] = useState(false);

  const handleChange = (evt) => {
    setHasAccepted(evt.target.checked);
  };

  return (
    <div>
      <h1>Please login to your acccount!</h1>

      <LoginForm onLogin={handleLogin} />

      <MyComponent />
      <SearchBar />
      <>
        <p>Selected language: {lang}</p>
        <LangSwitcher value={lang} onSelect={setLang} />
      </>
      <>
        <h1>Select coffee size</h1>
        <label>
          <input
            type="radio"
            name="coffeeSize"
            value="sm"
            checked={coffeeSize === "sm"}
            onChange={handleSizeChange}
          />
          Small
        </label>
        <label>
          <input
            type="radio"
            name="coffeeSize"
            value="md"
            checked={coffeeSize === "md"}
            onChange={handleSizeChange}
          />
          Medium
        </label>
        <label>
          <input
            type="radio"
            name="coffeeSize"
            value="lg"
            checked={coffeeSize === "lg"}
            onChange={handleSizeChange}
          />
          Large
        </label>
        <p>
          <b>Selected size:</b> {coffeeSize}
        </p>
      </>
      <div>
        <label>
          <input
            type="checkbox"
            name="terms"
            checked={hasAccepted}
            onChange={handleChange}
          />
          I accept terms and conditions
        </label>
        <button type="button" disabled={!hasAccepted}>
          Proceed
        </button>
      </div>
    </div>
  );
}
