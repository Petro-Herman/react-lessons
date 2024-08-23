import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./App.module.css";
import { useId } from "react";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  message: Yup.string()
    .min(3, "Too schort!")
    .max(256, "Too long")
    .required("Required"),
  level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required"),
});

const initialValues = {
  username: "",
  email: "",
  message: "",
  level: "good",
};

export default function FeedbackForm() {
  const nameFielId = useId();
  const emailFielId = useId();
  const msgFieldId = useId();
  const levelFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor={nameFielId}>Username</label>
          <Field
            className={css.field}
            type="text"
            name="username"
            placeholder="Name"
            id={nameFielId}
          />
          <ErrorMessage name="username" component="span" />
        </div>
        <div>
          <label htmlFor={emailFielId}>Email</label>
          <Field
            className={css.field}
            type="email"
            name="email"
            placeholder="Email"
            id={emailFielId}
          />
          <ErrorMessage name="email" component="span" />
        </div>
        <div>
          <label htmlFor={msgFieldId}>Message</label>
          <Field as="textarea" name="message" id={msgFieldId} rows="5" />
          <ErrorMessage name="message" component="span" />
        </div>
        <div>
          <Field as="select" name="level" id={levelFieldId}>
            <option value="good">Good</option>
            <option value="neutral">Neutral</option>
            <option value="bad">Bad</option>
          </Field>
          <ErrorMessage name="level" component="span" />
        </div>
        <button className={css.btn} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}
