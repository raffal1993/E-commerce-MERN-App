import { Add, Remove } from '@mui/icons-material';
import { Button } from '@mui/material';
import Announcement from 'components/Announcement/Announcement';
import Footer from 'components/Footer/Footer';
import Navbar from 'components/Navbar/Navbar';
import Newsletter from 'components/Newsletter/Newsletter';
import useFetchProducts from 'hooks/useFetchProducts';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { addProduct } from 'redux/cart';
import { useAppDispatch } from 'redux/hooks';
import { v4 as uuidv4 } from 'uuid';
import {
  AddContainer,
  Amount,
  AmountContainer,
  Container,
  Desc,
  Filter,
  FilterColor,
  FilterContainer,
  FilterSize,
  FilterSizeOption,
  FilterTitle,
  Image,
  ImgContainer,
  InfoContainer,
  Price,
  Title,
  Wrapper,
} from './Product.styled';

const Product = () => {
  const { product } = useFetchProducts();
  const { img, title, price, desc, color, size } = product || {};

  const [quantity, setQuantity] = useState(1);
  const [pickColorIndex, setPickColorIndex] = useState(0);
  const [pickSize, setPickSize] = useState('');

  const dispatch = useAppDispatch();

  const handleQuantity = (type: 'decrease' | 'increase') => {
    type === 'increase' && setQuantity((prev) => ++prev);
    type === 'decrease' && quantity > 1 && setQuantity((prev) => --prev);
  };

  const handlePickSize = (e: ChangeEvent<HTMLSelectElement>) => {
    setPickSize(e.currentTarget.value);
  };
  const handlePickColorIndex = (_e: MouseEvent<HTMLDivElement>, index: number) => {
    setPickColorIndex(index);
  };

  const handleAddToCart = () => {
    const isProduct = size && color && price && product;
    isProduct &&
      dispatch(
        addProduct({
          product: {
            ...product,
            color: [color[pickColorIndex]],
            size: [pickSize],
            quantity,
          },
          price: price * quantity,
        }),
      );
  };

  useEffect(() => {
    setPickSize((size && size[0]) || '');
  }, [size]);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={img} alt={title || 'Image'} />
        </ImgContainer>
        <InfoContainer>
          <Title>{title}</Title>
          <Desc>{desc}</Desc>
          <Price>$ {price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {color &&
                color.map((item, index) => (
                  <FilterColor
                    className={pickColorIndex === index ? 'active' : undefined}
                    onClick={(e) => handlePickColorIndex(e, index)}
                    key={uuidv4()}
                    color={item}
                  />
                ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize value={pickSize} onChange={handlePickSize}>
                {size &&
                  size.map((item) => <FilterSizeOption key={uuidv4()}>{item}</FilterSizeOption>)}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity('decrease')} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity('increase')} />
            </AmountContainer>
            <Button onClick={handleAddToCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
