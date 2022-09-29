import { FC } from 'react';
import { Button, Container, Image, Info, Title } from './CategoryItem.styled';

interface CategoryItemProps {
  img: string;
  title: string;
}

const CategoryItem: FC<CategoryItemProps> = ({ img, title }) => {
  return (
    <Container>
      <Image src={img} />
      <Info>
        <Title>{title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
