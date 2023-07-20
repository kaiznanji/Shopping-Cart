import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Grid, Stack, IconButton } from "@mui/material";
import { AccountCircle, ShoppingCart } from "@mui/icons-material";
import {
  NavBarContainer,
  NavBarTitle,
  LogoutButton,
  SignInButton,
  CartTotalButton,
} from "../styles/Navbar";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { getToken, getEmail, getCartSize } from "../store/appSelector";
import { logoutUser } from "../cognito";
import { setEmail, setAccessToken } from "../store/appSlice";

const Navbar = () => {
  const accessToken = useSelector(getToken);
  const cartTotal = useSelector(getCartSize);
  const email = useSelector(getEmail);
  const [anchorEl, setAnchorEl] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser(email);
    dispatch(setEmail(undefined));
    dispatch(setAccessToken(undefined));
  };

  return (
    <NavBarContainer>
      <Link to="/" style={{ textDecoration: "none" }}>
        <NavBarTitle>Jitto Products</NavBarTitle>
      </Link>
      <Grid container justifyContent="flex-end">
        <CartTotalButton>{cartTotal}</CartTotalButton>
        <IconButton>
          <ShoppingCart
            sx={{ fontSize: 30, color: "black", mr: 3 }}
            onClick={(e) => setAnchorEl(e.currentTarget)}
          />
        </IconButton>
        <Cart anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
        {accessToken === undefined ? (
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
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </Stack>
        )}
      </Grid>
    </NavBarContainer>
  );
};

export default Navbar;
