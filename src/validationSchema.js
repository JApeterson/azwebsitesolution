import * as yup from "yup";

const validationsForm = {
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
};

export default validationsForm;
