import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Image, Info, Title } from './CategoryItem.styled';

interface CategoryItemProps {
  img: string;
  title: string;
  category: string;
}

const CategoryItem: FC<CategoryItemProps> = ({ img, title, category }) => {
  return (
    <Container>
      <Link to={`/products/${category}`}>
        <Image src={img} />
        <Info>
          <Title>{title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
