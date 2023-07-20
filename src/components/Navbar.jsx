import React from "react";
import { Grid, IconButton } from "@mui/material";
import { AccountCircle, ShoppingCart } from "@mui/icons-material";
import { NavBarContainer, NavBarTitle, LogoutButton, SignInButton } from "../styles/Navbar";

const Navbar = () => {
    const x = true;
  return (
    <NavBarContainer>
      <NavBarTitle>Jitto Products</NavBarTitle>
      <Grid container justifyContent="flex-end">
        <IconButton>
          <ShoppingCart sx={{ fontSize: 30, color: "black", mr: 3 }} />
        </IconButton>
        {x ? (
            <SignInButton endIcon={<AccountCircle />}>Sign in</SignInButton>
        ) : (
            <LogoutButton>Logout</LogoutButton>
        )}
      </Grid>
    </NavBarContainer>
  );
};

export default Navbar;
