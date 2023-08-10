import { Button, TextField, styled } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import styles from "./Form.module.css";

const Search = styled(TextField)(({ theme }) => ({
  width: "100vh",
}));

const ButtonSubmit = styled(Button)(({ theme }) => ({
  fontFamily: "Montserrat",
  padding: "15px 180px",
  marginTop: "15px",
  marginBottom: "15px",
}));

const validationSchema = yup.object({
  ip: yup
    .string("Enter your ip")
    .matches(
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
      "Enter valid Ip"
    )
    .required("Ip is required"),
});

const Form = ({ onSubmit, errorCode }) => {
  const formik = useFormik({
    initialValues: {
      ip: "",
    },
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.container}>
        <Search
          className={styles.inputSearch}
          fullWidth
          error={!!formik.errors.ip}
          id="ip"
          label="IP Address"
          value={formik.values.ip}
          onChange={formik.handleChange}
          name="ip"
          helperText={formik.errors.ip}
        />
        <ButtonSubmit
          disabled={!!errorCode}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </ButtonSubmit>
      </div>
    </form>
  );
};

export default Form;
