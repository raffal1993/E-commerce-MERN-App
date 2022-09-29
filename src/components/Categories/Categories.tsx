import CategoryItem from 'components/CategoryItem/CategoryItem';
import { categories } from 'utils/Categories';
import { Container } from './Categories.styled';

const Categories = () => {
  return (
    <Container>
      {categories.map(({ id, img, title }) => (
        <CategoryItem key={id} img={img} title={title} />
      ))}
    </Container>
  );
};

export default Categories;
