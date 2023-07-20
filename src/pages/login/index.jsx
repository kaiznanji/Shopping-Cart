import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, Typography, Stack } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { setAccessToken, setEmail } from "../../store/appSlice";
import {
  FormEmailInput,
  FormPasswordInput,
} from "../../components/CustomFormTextInput";
import { loginUser } from "../../cognito";
import { SignInButton, NotRegisteredButton } from "../../styles/Login";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const user = await loginUser(data);
      dispatch(setAccessToken(user.getAccessToken().getJwtToken()))
      dispatch(setEmail(data.email));
      navigate("/");
    } catch (e) {
      alert(e);
    }
  };
  return (
    <Container maxWidth="sm">
      <Typography
        variant="h4"
        sx={{ fontFamily: "Raleway", color: "black" }}
        align="center"
        gutterBottom
      >
        Login
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Stack spacing={2} pb={4}>
            <FormEmailInput />
            <FormPasswordInput />
          </Stack>
          <Stack alignItems="center" pb={4}>
            <SignInButton type="submit">Login</SignInButton>
          </Stack>
          <NotRegisteredButton onClick={() => navigate("/register")}>
            Not a user? Create an account
          </NotRegisteredButton>
        </form>
      </FormProvider>
    </Container>
  );
};

export default Login;
