import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Grid, Stack, IconButton, Avatar } from "@mui/material";
import { AccountCircle, ShoppingCart } from "@mui/icons-material";
import {
  NavBarContainer,
  NavBarTitle,
  LogoutButton,
  SignInButton,
} from "../styles/Navbar";

const Navbar = () => {
  const x = true;
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <NavBarContainer>
      <Link to="/" style={{ textDecoration: "none" }}>
        <NavBarTitle>Jitto Products</NavBarTitle>
      </Link>
      <Grid container justifyContent="flex-end">
        <IconButton>
          <ShoppingCart sx={{ fontSize: 30, color: "black", mr: 3 }} />
        </IconButton>
        {x ? (
          <>
            {location.pathname === "/" && (
              <SignInButton
                endIcon={<AccountCircle />}
                onClick={() => navigate("/login")}
              >
                Sign in
              </SignInButton>
            )}
          </>
        ) : (
          <Stack spacing={3} direction="row">
            <Avatar sx={{ width: 52, height: 52, bgcolor: "blue" }}>K</Avatar>
            <LogoutButton>Logout</LogoutButton>
          </Stack>
        )}
      </Grid>
    </NavBarContainer>
  );
};

export default Navbar;
