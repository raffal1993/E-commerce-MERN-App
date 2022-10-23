import Pay from 'components/Pay/Pay';
import Success from 'components/Success/Success';
import Cart from 'pages/Cart/Cart';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Product from 'pages/Product/Product';
import ProductList from 'pages/ProductList/ProductList';
import Register from 'pages/Register/Register';
import { Navigate, Route, Routes } from 'react-router-dom';

const App = () => {
  const user = true;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
      <Route path="/product/*" element={<Product />} />
      <Route path="/products/*" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/pay" element={<Pay />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
};

export default App;
