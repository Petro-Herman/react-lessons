// import css from "./App.module.css";
// import ClicksTraker from "../ClicksTraker/ClicksTraker";
// import Toggler from "./Toggler/Toggler";
// import { useState, useEffect } from "react";
// import Reader from "../Reader/Reader";
// import articles from "../articles.json";

// export default function App() {
//   const [clicks, setClicks] = useState(0);
//   const [values, setValues] = useState({
//     a: 1,
//     b: 2,
//     c: 3,
//   });

//   const updateValues = () => {
//     setValues({
//       ...values,
//       b: 5,
//     });
//   };
//   const updateClicks = () => {
//     setClicks(clicks + 1);
//   };
//   const resetClicks = () => {
//     setClicks(0);
//   };

//   return (
//     <div className={css.container}>
//       <h1>State in React</h1>

//       <Toggler>
//         <h2>Hello</h2>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
//           voluptate?
//         </p>
//       </Toggler>
//       <Toggler>
//         <h2>How do you do?</h2>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
//           provident nobis eaque esse ab quaerat, minima qui, corrupti, quidem
//           temporibus explicabo cumque laudantium. Labore, animi, eum sed
//           expedita temporibus voluptatibus nihil rerum earum officia distinctio
//           ipsum vel, illum non perspiciatis omnis vitae. Deleniti quisquam
//           tenetur adipisci aliquam fugiat accusantium quibusdam.
//         </p>
//       </Toggler>
//       <Toggler>
//         <h2>Bye</h2>
//         <p>Lorem ipsum dolor sit amet.</p>
//       </Toggler>

//       <button onClick={updateValues}>
//         Update Values {values.a + values.b + values.c}
//       </button>
//       <hr />
//       <ClicksTraker value={clicks} onUpdate={updateClicks} />
//       <ClicksTraker value={clicks} onUpdate={updateClicks} />
//       <button onClick={resetClicks}>Reset clicks</button>
//       <hr />
//       {/* <button onClick={() => handelClick(5)}>Click me</button> */}

//       <Reader items={articles} />
//     </div>
//   );
// }

// export default function App() {
//   const [clicks, setClicks] = useState(0);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// }
