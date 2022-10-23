import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import React, { FC } from 'react';
import { Container, Icon, Image, Info } from './Product.styled';
import { Link } from 'react-router-dom';

interface ProductProps {
  img: string;
  title: string;
  _id: string;
}

const Product: FC<ProductProps> = ({ img, title, _id }) => {
  return (
    <Container>
      <Image src={img} alt={title} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${_id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
