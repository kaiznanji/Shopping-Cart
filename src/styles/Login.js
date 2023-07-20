import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";


export const SignInButton = styled(Button)(() => ({
  backgroundColor: "blue",
  color: "white",
  "&:hover": {
    backgroundColor: "blue",
  },
  fontFamily: "Raleway",
  fontSize: "18px",
  width: "400px",
  border: "1px solid black",
  borderRadius: 20,
  textTransform: "none",
}));

export const NotRegisteredButton = styled(Button)(() => ({
    fontFamily: "Raleway",
    fontSize: "16px",
    color: "black",
    textDecoration: "underline",
    textTransform: "none",
    float: "right",
  }));