import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./UserForm.module.css";

const UserSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too short, min 3 letters!")
    .max(50, "Too long, max 50 letters")
    .required("This field is required"),
  email: Yup.string()
    .email("Must be in email format")
    .required("This field is required"),
  role: Yup.string()
    .oneOf(["guest", "user", "admin"])
    .required("This field is required"),
  comment: Yup.string()
    .max(100, "Too long, max 100 letters")
    .required("This field is required"),
  options: Yup.array()
    // .oneOf(["a", "b", "c"])
    .required("This field is required"),
});

export default function UserForm() {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        role: "guest",
        comment: "",
        options: [],
      }}
      validationSchema={UserSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label>Username:</label>
          <Field className={css.input} type="text" name="username" />
          <ErrorMessage
            name="username"
            component="span"
            className={css.error}
          />
        </div>

        <div className={css.formGroup}>
          <label>Email:</label>
          <Field className={css.input} type="email" name="email" />
          <ErrorMessage name="email" component="span" className={css.error} />
        </div>

        <div className={css.formGroup}>
          <label>Role:</label>
          <Field as="select" className={css.input} name="role">
            <option value="guest">Guest</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </Field>
          <ErrorMessage name="role" component="span" className={css.error} />
        </div>

        <div className={css.formGroup}>
          <label>Comment:</label>
          <Field as="textarea" className={css.input} name="comment"></Field>
          <ErrorMessage name="comment" component="span" className={css.error} />
        </div>

        <div className={css.formGroup}>
          <div>
            <Field type="checkbox" name="options" value="a" />A
          </div>
          <div>
            <Field type="checkbox" name="options" value="b" />B
          </div>
          <div>
            <Field type="checkbox" name="options" value="c" />C
          </div>
          <ErrorMessage name="options" component="span" className={css.error} />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
