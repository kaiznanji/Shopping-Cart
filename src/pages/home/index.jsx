import React from "react";
import { Grid, Container } from "@mui/material";
import Product from "../../components/Product";
import { products } from "../../data";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Grid container rowSpacing={15} columnSpacing={5}>
        {products.map((product, index) => (
          <Grid item xs key={index}>
            <Product {...product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
