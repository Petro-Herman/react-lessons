import { useId, useState } from "react";

const LoginForm = ({ onLogin }) => {
  const loginId = useId();
  const passwordId = useId();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const { login, password } = form.elements;

    console.log(login, password);
    console.log(login.value, password.value);

    onLogin({
      login: login.value,
      password: password.value,
    });

    form.reset();
  };

  return (
    // {/* <form onSubmit={handleSubmit}>
    //   <input type="text" name="login" />
    //   <input type="password" name="password" />
    //   <button type="submit">Login</button>
    // </form> */}
    <form>
      <label htmlFor={loginId}>Login</label>
      <input type="text" name="login" id={loginId} />
      <label htmlFor={passwordId}>Password</label>
      <input type="password" name="password" id={passwordId} />
      <button type="submit">Login</button>
    </form>
  );
};

// const LoginForm = () => {
//   const [values, setValues] = useState({
//     login: "",
//     password: "",
//   });

//   return (
//     <form>
//       <input type="text" name="login" value={values.login} />
//       <input type="password" name="password" value={values.password} />
//       <button type="submite">Login</button>
//     </form>
//   );
// };

export default LoginForm;
