import { publicRequest } from 'api/instance';
import useGetURLParams from 'hooks/useGetURLParams';
import { useState, useEffect } from 'react';
import { Filters, Product, Sort } from 'types/Products';

interface useFetchProductsParams {
  filters?: Filters | null;
  sort?: Sort;
}

const useFetchProducts = ({ filters, sort }: useFetchProductsParams = {}) => {
  const { category, ID } = useGetURLParams();
  const [product, setProduct] = useState<Product>();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!ID) return;
    const productURL = `products/find/${ID}`;

    const getProduct = async () => {
      try {
        const res = await publicRequest.get(productURL);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [ID]);

  useEffect(() => {
    const productsURL = category ? `products/?category=${category}` : 'products';

    const getProducts = async () => {
      try {
        const res = await publicRequest.get(productsURL);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    if (!filters) return;

    const filteredProducts = products.filter((item) =>
      Object.entries(filters).every(([key, value]) => {
        const filter = item[key as keyof Filters] || [];
        return filter.includes(value);
      }),
    );

    setFilteredProducts(filteredProducts);
  }, [category, filters, products]);

  useEffect(() => {
    if (sort === 'Newest') {
      setProducts((prev) => [...prev].sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1)));
    } else if (sort === 'Asc') {
      setProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else if (sort === 'Desc') {
      setProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return { products, filteredProducts, product };
};

export default useFetchProducts;
