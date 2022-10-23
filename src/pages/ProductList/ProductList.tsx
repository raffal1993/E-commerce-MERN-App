import Announcement from 'components/Announcement/Announcement';
import Footer from 'components/Footer/Footer';
import Navbar from 'components/Navbar/Navbar';
import Newsletter from 'components/Newsletter/Newsletter';
import Products from 'components/Products/Products';
import { ChangeEvent, useState } from 'react';
import { Filters, Sort } from 'types/Products';
import {
  Container,
  Filter,
  FilterContainer,
  FilterText,
  Option,
  Select,
  Title,
} from './ProductList.styled';

const ProductList = () => {
  const [filters, setFilters] = useState<Filters | null>(null);
  const [sort, setSort] = useState<Sort>('Newest');

  const handleFilters = (e: ChangeEvent<HTMLSelectElement>) => {
    const filterType = e.target.name;
    const value = e.target.value;

    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Sort;

    setSort(value);
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select onChange={handleFilters} name="color" defaultValue={'Color'}>
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select onChange={handleFilters} name="size" defaultValue={'Size'}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={handleSort} defaultValue={'Newest'}>
            <Option value="Newest">Newest</Option>
            <Option value="Asc">Price (asc)</Option>
            <Option value="Desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
