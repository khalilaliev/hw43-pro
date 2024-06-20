import { ErrorMessage, Field, Form, Formik } from "formik";
import validationSchema from "../FormikValidation/ValidationSchema";
const Login = () => {
  return (
    <>
      <h1 className=" text-center my-7 text-5xl">Formik</h1>
      <div className="  flex justify-center items-center">
        <Formik
          initialValues={{ username: "", email: "", phone: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log("Form submitted:", values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="border border-gray-500 border-opacity-50 rounded-3xl p-5 flex flex-col gap-4">
              <div>
                <label htmlFor="username">Username:</label>
                <Field className="input" type="text" name="username" />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <Field className="input" type="email" name="email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>

              <div>
                <label htmlFor="phone">Phone:</label>
                <Field className="input" type="text" name="phone" />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>

              <button
                className="btn w-1/2 my-0 mx-auto"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Login;
