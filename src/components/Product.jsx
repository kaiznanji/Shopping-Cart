import React from "react";
import { Grid, Stack } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import {
  ProductContainer,
  ProductImage,
  ProductPrice,
  ProductTitle,
  ProductDescription,
  ProductAddToCartButton,
} from "../styles/Product";


const Product = ({ image_url, price, title, description }) => {
  return (
    <ProductContainer>
      <ProductImage src={image_url} alt="product-image" />
      <ProductTitle>{title}</ProductTitle>
      <Stack direction="row" sx={{pt: 2, pb: 2}}>
        <ProductAddToCartButton endIcon={<ShoppingCart />}>Add to cart</ProductAddToCartButton>
        <Grid container justifyContent="flex-end">
          <ProductPrice>${price}</ProductPrice>
        </Grid>
      </Stack>
      <ProductDescription>{description}</ProductDescription>
    </ProductContainer>
  );
};

export default Product;
