import Product from 'components/Product/Product';
import { v4 as uuidv4 } from 'uuid';
import useFetchProducts from 'hooks/useFetchProducts';
import React, { FC } from 'react';
import { Filters, Sort } from 'types/Products';
import { Container } from './Products.styled';

interface ProductsProps {
  filters?: Filters | null;
  sort?: Sort;
}

const Products: FC<ProductsProps> = ({ filters, sort }) => {
  const { products, filteredProducts } = useFetchProducts({ filters, sort });

  const isMainPage = !sort && !filters;

  const displayedProducts = filters ? filteredProducts : isMainPage ? products.slice(-5) : products;

  return (
    <Container>
      {displayedProducts.map(({ title, img, _id }) => (
        <Product key={uuidv4()} img={img} title={title} _id={_id}></Product>
      ))}
    </Container>
  );
};

export default Products;
