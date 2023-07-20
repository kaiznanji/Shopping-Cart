import { styled } from "@mui/material/styles";
import { Typography, Button, AppBar } from "@mui/material";

export const NavBarContainer = styled(AppBar)(() => ({
  alignItems: "center",
  backgroundColor: "white",
  padding: "15px 20px 15px 20px",
  position: "fixed",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
}));

export const NavBarTitle = styled(Typography)(() => ({
  fontSize: 30,
  color: "black",
  fontFamily: "Raleway",
  fontWeight: "bold",
}));

export const SignInButton = styled(Button)(() => ({
  backgroundColor: "blue",
  color: "white",
  "&:hover": {
    backgroundColor: "blue",
  },
  fontFamily: "Raleway",
  fontSize: "18px",
  width: "125px",
  border: "1px solid black",
  borderRadius: 20,
  textTransform: "none",
}));

export const LogoutButton = styled(Button)(() => ({
  backgroundColor: "red",
  color: "white",
  "&:hover": {
    backgroundColor: "red",
  },
  fontFamily: "Raleway",
  fontSize: "18px",
  width: "100px",
  border: "1px solid black",
  borderRadius: 20,
  textTransform: "none",
}));
