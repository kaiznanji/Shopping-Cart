import React from "react";
import { useDispatch } from "react-redux";
import { IconButton, Stack } from "@mui/material";
import { RemoveCircle, AddCircle } from "@mui/icons-material";
import {
  CartItemContainer,
  CartItemImage,
  CartItemTitle,
  CartItemPrice,
  CartItemAmount,
} from "../styles/CartItem";
import { removeFromCart, addToCart } from "../store/appSlice";

const CartItem = (product) => {
  const { id, image_url, title, price, count } = product;
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(id));
  };
  return (
    <CartItemContainer>
      <Stack direction="row" sx={{ pt: 2, pb: 2 }}>
        <CartItemImage src={image_url} alt="CartItem-image" />
        <Stack>
          <CartItemTitle>{title}</CartItemTitle>
          <CartItemPrice>${price}</CartItemPrice>
          <Stack direction="row" spacing={1} alignItems="center" mt={3}>
            <IconButton>
              <RemoveCircle
                sx={{ fontSize: 25, color: "black" }}
                onClick={handleRemove}
              />
            </IconButton>

            <CartItemAmount>{count}</CartItemAmount>
            <IconButton>
              <AddCircle
                sx={{ fontSize: 25, color: "black" }}
                onClick={handleAdd}
              />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </CartItemContainer>
  );
};

export default CartItem;
