import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import React, { FC } from 'react';
import { Container, Icon, Image, Info } from './Product.styled';

interface ProductProps {
  id: number;
  img: string;
}

const Product: FC<ProductProps> = ({ id, img }) => {
  return (
    <Container>
      <Image src={img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
