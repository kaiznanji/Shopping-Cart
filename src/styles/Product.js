import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";

export const ProductContainer = styled(Box)(() => ({
  position: "relative",
  width: "400px",
  height: "500px",
}));

export const ProductImage = styled("img")(() => ({
  height: "70%",
  width: "100%",
  objectFit: "cover",
  display: "inline-flex",
  borderRadius: "25px",
  paddingBottom: "5px",
}));

export const ProductPrice = styled(Typography)(() => ({
  display: "inline",
  fontFamily: "Raleway",
  fontWeight: "bold",
  fontSize: "35px",
}));

export const ProductTitle = styled(Typography)(() => ({
  display: "block",
  fontFamily: "Raleway",
  fontSize: "25px",
  marginTop: "3px",
  fontWeight: 500,
}));

export const ProductDescription = styled(Typography)(() => ({
  fontFamily: "Raleway",
  fontSize: "18px",
}));

export const ProductAddToCartButton = styled(Button)(() => ({
  backgroundColor: "blue",
  color: "white",
  "&:hover": {
    backgroundColor: "blue",
  },
  fontFamily: "Raleway",
  fontSize: "18px",
  width: "240px",
  border: "1px solid black",
  borderRadius: 20,
  textTransform: "none",
}));
