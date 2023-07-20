import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const FormTextLabel = styled(Typography)(() => ({
  fontFamily: "Raleway",
  fontSize: "18px",
  pb: 0.5,
  pl: 1,
  color: "black",
}));

export const FormHelperTextLabel = styled(Typography)(() => ({
  fontFamily: "Raleway",
  fontSize: "14px",
  color: "gray",
  pb: 0.5,
  pl: 1,
}));
