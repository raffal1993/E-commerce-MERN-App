import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useGetURLParams = () => {
  const [category, setCategory] = useState('');
  const [ID, setID] = useState('');

  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.match('/products/')) return;

    const category = location.pathname.split('/')[2];
    setCategory(category);
  }, [location]);

  useEffect(() => {
    if (!location.pathname.match('/product/')) return;

    const id = location.pathname.split('/')[2];
    setID(id);
  }, [location]);

  return { category, ID };
};

export default useGetURLParams;
