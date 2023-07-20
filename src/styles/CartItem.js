import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";


export const CartItemContainer = styled(Box)(() => ({
    position: "relative",
    width: "350px",
    height: "200px",
  }));
  
  export const CartItemImage = styled("img")(() => ({
    height: "100%",
    width: "50%",
    objectFit: "cover",
    paddingRight: "10px",
  }));
  
  export const CartItemPrice = styled(Typography)(() => ({
    fontFamily: "Raleway",
    fontWeight: "bold",
    fontSize: "25px",
  }));
  
  export const CartItemTitle = styled(Typography)(() => ({
    fontFamily: "Raleway",
    fontSize: "20px",
    marginBottom: "3px",
    fontWeight: 500,
  }));
  
  export const CartItemAmount = styled(Typography)(() => ({
    fontFamily: "Raleway",
    fontSize: "18px",
  }));


  export const CheckoutButton = styled(Button)(() => ({
    backgroundColor: "blue",
    color: "white",
    "&:hover": {
      backgroundColor: "blue",
    },
    fontFamily: "Raleway",
    fontSize: "18px",
    width: "150px",
    border: "1px solid black",
    borderRadius: 20,
    textTransform: "none",
  }));