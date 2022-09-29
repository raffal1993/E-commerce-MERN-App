import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { sliderItems } from 'utils/SliderItems ';
import {
  Arrow,
  Button,
  Container,
  Description,
  Image,
  ImgContainer,
  InfoContainer,
  Slide,
  Title,
  Wrapper,
} from './Slider.styled';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      const nextIndex = slideIndex === 0 ? sliderItems.length - 1 : slideIndex - 1;
      setSlideIndex(nextIndex);
    }

    if (direction === 'right') {
      const nextIndex = slideIndex === sliderItems.length - 1 ? 0 : slideIndex + 1;
      setSlideIndex(nextIndex);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        {sliderItems.map(({ bg, desc, id, img, title }) => (
          <Slide key={id} bg={bg} slideIndex={slideIndex}>
            <ImgContainer>
              <Image src={img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{title}</Title>
              <Description>{desc}</Description>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
