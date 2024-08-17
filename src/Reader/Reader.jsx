import css from "./Reader.module.css";
import { useState } from "react";

export default function Reader({ items }) {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex(index - 1);
  };
  const handleNext = () => {
    setIndex(index + 1);
  };

  const isFirst = index === 0;
  const isLast = index === items.length - 1;

  const currentItem = items[index];

  return (
    <div>
      <h2>Reader</h2>
      <header className={css.header}>
        <div>
          <button onClick={handlePrev} disabled={isFirst}>
            Prev
          </button>
          <button onClick={handleNext} disabled={isLast}>
            Next
          </button>
        </div>
        <p>
          {index + 1}/{items.length}
        </p>
      </header>
      <article>
        <h3>{currentItem.topic}</h3>
        <p>{currentItem.text}</p>
      </article>
    </div>
  );
}
