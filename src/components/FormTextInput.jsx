import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { InputAdornment, TextField, Box, Stack } from "@mui/material";

import {
  FormTextLabel,
  FormHelperTextLabel,
} from "../styles/FormTextInput";

const FormTextInput = ({
  name,
  rules,
  endInput,
  label,
  height = 40,
  helperLabel,
  startInput,
  right,
  left,
  required = "This field is required",
  ...props
}) => {
  const { control, formState } = useFormContext();
  return (
    <Box width="100%">
      <FormTextLabel>{label}</FormTextLabel>
      <FormHelperTextLabel>{helperLabel}</FormHelperTextLabel>
      <Stack direction="row" alignItems="center">
        {left}
        <Controller
          render={({
            field: { onChange, onBlur, value, ref },
            fieldState: { invalid, error },
          }) => (
            <TextField
              margin="normal"
              variant="standard"
              fullWidth
              value={value}
              error={invalid}
              helperText={error?.message}
              name={name}
              disabled={formState.isSubmitting}
              onChange={onChange}
              onBlur={onBlur}
              inputRef={ref}
              sx={{
                border: "1px solid grey",
                borderRadius: 5,
                paddingTop: "10px",
                paddingBottom: "10px",
                height: height,
                backgroundColor: "white",
              }}
              {...props}
              FormHelperTextProps={{
                style: {
                  marginTop: height - 23,
                  fontFamily: "Raleway",
                  fontSize: "16px",
                },
              }}
              InputProps={{
                disableUnderline: true,
                style: {
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  fontFamily: "Raleway",
                  fontSize: "20px",
                },
                startAdornment: (
                  <InputAdornment position="start">{startInput}</InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">{endInput}</InputAdornment>
                ),
              }}
            />
          )}
          name={name}
          defaultValue=""
          control={control}
          rules={{ required: required, ...rules }}
        />
        {right}
      </Stack>
    </Box>
  );
};

export default FormTextInput;
