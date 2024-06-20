import * as Yup from "yup";

const phoneValidation = Yup.string()
  .matches(
    /^[+]?[0-9]{1,4}?[-. ]?(\([0-9]{1,3}\))?[-. ]?[0-9]{1,4}[-. ]?[0-9]{1,4}[-. ]?[0-9]{1,9}$/,
    "Invalid phone format"
  )
  .required("Required");

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .max(15, "Username must be at most 15 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  phone: phoneValidation,
});

export default validationSchema;
