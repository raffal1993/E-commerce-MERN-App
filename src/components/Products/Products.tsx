import Product from 'components/Product/Product';
import React from 'react';
import { popularProducts } from 'utils/PopularProducts ';
import { Container } from './Products.styled';

const Products = () => {
  return (
    <Container>
      {popularProducts.map(({ id, img }) => (
        <Product key={id} id={id} img={img}></Product>
      ))}
    </Container>
  );
};

export default Products;
