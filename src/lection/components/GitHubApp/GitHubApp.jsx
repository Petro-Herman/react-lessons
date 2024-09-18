import { Field, Form, Formik } from "formik";
import css from "./GitHubApp.module.css";
import axios from "axios";

export default function GitHubApp() {
  const handleSearch = async (values, actions) => {
    console.log(values);

    const response = await axios.get(
      `https://api.github.com/users/${values.username}`
    );
    console.log(response);
  };

  return (
    <div className={css.container}>
      <h1>HTTP requst in React</h1>
      <Formik initialValues={{ username: " " }} onSubmit={handleSearch}>
        <Form>
          <Field name="username" type="text" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
}
