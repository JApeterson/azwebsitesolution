import SendIcon from "@mui/icons-material/Send";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  TextField,
} from "@mui/material";

import { Form, withFormik } from "formik";
import React from "react";
import * as yup from "yup";
import validationsForm from "../src/validationSchema";
const form = (props) => {
  const { values, touched, errors, isSubmitting, handleChange, handleBlur } =
    props;
  return (
    <Form>
      <Card raised>
        <CardContent>
          <TextField
            id="firstName"
            label="First Name"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.firstName ? errors.firstName : ""}
            error={touched.firstName && Boolean(errors.firstName)}
            margin="dense"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="lastName"
            label="Last Name"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.lastName ? errors.lastName : ""}
            error={touched.lastName && Boolean(errors.lastName)}
            margin="dense"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.email ? errors.email : ""}
            error={touched.email && Boolean(errors.email)}
            margin="dense"
            variant="outlined"
            fullWidth
          />
        </CardContent>
        <CardActions>
          <Button
            disabled={isSubmitting}
            type="submit"
            variant="contained"
            size="large"
            endIcon={!isSubmitting && <SendIcon />}
          >
            {isSubmitting ? <CircularProgress /> : "Subscribe"}
          </Button>
        </CardActions>
      </Card>
    </Form>
  );
};

const SubscribedForm = withFormik({
  mapPropsToValues: ({ firstName, email, lastName }) => {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
    };
  },

  validationSchema: yup.object().shape(validationsForm),

  handleSubmit: async (values, { props: { setSubscribed } }) => {
    const { firstName, lastName, email } = values;
    try {
      await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email }),
      });
      setSubscribed(true);
    } catch (err) {
      console.log("client-side: ", err);
    }
  },
})(form);

export default SubscribedForm;
