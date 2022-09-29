import Announcement from 'components/Announcement/Announcement';
import Categories from 'components/Categories/Categories';
import Footer from 'components/Footer/Footer';
import Navbar from 'components/Navbar/Navbar';
import Newsletter from 'components/Newsletter/Newsletter';
import Products from 'components/Products/Products';
import Slider from 'components/Slider/Slider';
import { Container } from './Home.styled';

const Home = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Home;
