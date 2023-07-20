import React, { useState } from "react";
import { IconButton, Box, Stack } from "@mui/material";
import {
  Lock,
  Visibility,
  VisibilityOff,
  Email,
  Phone,
  CheckCircleOutline,
  CancelOutlined,
} from "@mui/icons-material";
import FormTextInput from "./FormTextInput";
import { FormTextLabel } from "../styles/FormTextInput";

export const FormEmailInput = ({ ...other }) => {
  return (
    <FormTextInput
      name="email"
      placeholder="Email"
      startInput={<Email />}
      rules={{
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid email address",
        },
      }}
      {...other}
    />
  );
};

export const FormPhoneInput = ({ phone_number_verified, ...other }) => {
  return (
    <FormTextInput
      name="phone_number"
      placeholder="Phone"
      label="Phone Number"
      helperLabel="Number must be in E.164 format, eg. +1xxxxxxxxxx"
      startInput={<Phone />}
      rules={{
        minLength: {
          value: 12,
          message: "Invalid phone number",
        },
        maxLength: {
          value: 12,
          message: "Invalid phone number",
        },
        pattern: {
          value: /^\+[1-9]\d{1,14}$/,
          message: "Invalid phone number",
        },
      }}
      right={
        <Box ml={3}>
          {phone_number_verified ? (
            <Stack direction="row" spacing={1} alignItems="center">
              <CheckCircleOutline sx={{ color: "green" }} />
              <FormTextLabel>Verified</FormTextLabel>
            </Stack>
          ) : (
            <Stack direction="row" spacing={1} alignItems="center">
              <CancelOutlined sx={{ color: "red" }} />
              <FormTextLabel>Unverified</FormTextLabel>
            </Stack>
          )}
        </Box>
      }
      {...other}
    />
  );
};

export const FormPasswordInput = ({
  name = "password",
  placeholder = "Password",
  ...other
}) => {
  const [viewPassword, setViewPassword] = useState(false);

  const handleViewPassword = (e) => {
    e.preventDefault();
    setViewPassword(!viewPassword);
  };
  return (
    <FormTextInput
      name={name}
      type={viewPassword ? undefined : "password"}
      placeholder={placeholder}
      startInput={<Lock />}
      endInput={
        <IconButton onClick={handleViewPassword}>
          {viewPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      }
      {...other}
    />
  );
};
