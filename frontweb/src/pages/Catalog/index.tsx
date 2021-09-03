import ProductCard from 'components/ProductCard';
import { Product } from 'types/products';
import { Link } from 'react-router-dom';
import Pagination from 'components/Pagination';
import { useState } from 'react';
import { useEffect } from 'react';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL } from 'util/requests';
import axios, { AxiosRequestConfig } from 'axios';
import CardLoader from './CardLoader';

import './styles.css';

const Catalog = () => {
  const [page, setPage] = useState<SpringPage<Product>>();
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: "/products",
      baseURL: BASE_URL,
      params: {
        page: 0,
        size: 12,
      }, 
    };

    setisLoading(true);
    axios(params)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() =>{
        setisLoading(false);
      });
  }, []);

  return (
    <div className="container my-4 catalog-container">
      <div className="row catalog-title-container">
        <h1>Catálogo de produtos</h1>
      </div>

      <div className="row">
        {isLoading ? <CardLoader/> : (
          page?.content.map((product) => (
          <div className="col-sm-6 col-lg-4 col-xl-3" key={product.id}>
            <Link to="/products/1">
              <ProductCard product={product} />
            </Link>
          </div>
        )))}
      </div>

      <div className="row">
        <Pagination />
      </div>
    </div>
  );
};

export default Catalog;
