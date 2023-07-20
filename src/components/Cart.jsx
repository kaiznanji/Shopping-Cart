import React from "react";
import { Menu, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getCartItems } from "../store/appSelector";
import CartItem from "./CartItem";
import { CheckoutButton } from "../styles/CartItem";

const Cart = ({ anchorEl, setAnchorEl }) => {
  const cartItems = useSelector(getCartItems);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Menu
      id="menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      PaperProps={{
        elevation: 3,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          borderRadius: "20px",
        },
      }}
    >
      {cartItems.length === 0 ? (
        <Box sx={{ padding: 2 }} justifyContent="center">
          <Typography fontFamily="Raleway">
            You currently have no items in your cart
          </Typography>
        </Box>
      ) : (
        <Box sx={{ padding: 2 }}>
          {cartItems.map((item, i) => (
            <CartItem {...item} key={i} />
          ))}
          <Box display="flex" justifyContent="center" mt={3}>
            <CheckoutButton>Checkout</CheckoutButton>
          </Box>
        </Box>
      )}
    </Menu>
  );
};

export default Cart;
