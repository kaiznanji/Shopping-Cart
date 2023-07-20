import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Stack } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import {
  FormEmailInput,
  FormPasswordInput,
} from "../../components/CustomFormTextInput";
import FormTextInput from '../../components/FormTextInput';
import { SignInButton, NotRegisteredButton } from "../../styles/Login";


const Register = () => {
  const navigate = useNavigate();
  const methods = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Register Data:", data);
  };
  return (
    <Container maxWidth="sm">
      <Typography
        variant="h4"
        sx={{ fontFammily: "Raleway", color: "black" }}
        align="center"
        gutterBottom
      >
        Register
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Stack spacing={2} pb={4}>
            <FormTextInput name="firstname" placeholder="First Name" />
            <FormTextInput name="lastname" placeholder="Last Name" />
            <FormEmailInput />
            <FormPasswordInput />
          </Stack>
          <Stack alignItems="center" pb={4}>
            <SignInButton type="submit" >Register</SignInButton>
          </Stack>
          <NotRegisteredButton onClick={() => navigate("/login")}>
            Already a user? Login
          </NotRegisteredButton>
        </form>
      </FormProvider>
    </Container>
  );
};

export default Register;
