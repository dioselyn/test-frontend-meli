import { useState } from 'react';
import api from './api';

const useProducts = () => {
  const [resultQuery, setResultQuery] = useState({});
  const [resultProductById, setResultProductById] = useState({});
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [error, setError] = useState('');
  const author = {
    name: 'Dioselyn',
    lastname: 'Colina',
  };

  const getProductsQuery = async (query) => {
    const q = String(query).toLowerCase();

    await api
      .get(`/sites/MLA/search?q=${q}`)
      .then((response) => {
        const data = response.data;
        const allProducts = data.results;
        let categories = [];
        let items = [];

        if (allProducts.length > 0) {
          const filter =
            data['filters'].length > 0
              ? data['filters']
              : data['available_filters'];

          categories = filter
            .filter((item) => item?.id === 'category')[0]
            .values.sort((a, b) => b?.results - a?.results)
            .map((value) => value?.name)
            .slice(0, 5);

          const sortProducts = allProducts
            .sort((a, b) => a?.price - b?.price)
            .slice(0, 4);

          items = sortProducts.map((product) => {
            return {
              id: product?.id,
              title: product?.title,
              price: {
                currency: product?.currency_id,
                amount: product?.price,
              },
              picture: product?.thumbnail,
              condition: product?.condition,
              free_shipping: product?.shipping.free_shipping,
            };
          });
        }

        const newData = {
          author,
          categories,
          items,
        };

        setResultQuery(newData);
      })
      .catch((error) => setError(error));
  };

  const getProductById = async (id) => {
    const endpoints = [`/items/${id}`, `/items/${id}/description`];

    const requests = endpoints.map((url) => api.get(url));

    let product = {};
    await Promise.all(requests)
      .then((responses) => {
        const productDetail = responses[0].data;
        const productDescription = responses[1].data;

        let decimals = 0;
        const priceDecimal = productDetail.price.toString();

        if (priceDecimal.includes('.')) {
          const decimal = priceDecimal.split('.')[1];

          if (decimal.length === 1) {
            decimals = Number(decimal.padEnd(2, '0'));
          } else {
            decimals = Number(decimal);
          }
        } else {
          decimals = 0;
        }

        const price = productDetail.price.toString();

        if (productDetail && productDescription) {
          product = {
            author,
            item: {
              id: productDetail.id,
              title: productDetail.title,
              price: {
                currency: productDetail.currency_id,
                amount: price.includes('.')
                  ? Number(price.split('.')[0])
                  : productDetail.price,
                decimals,
              },
              picture: productDetail.pictures[0].url,
              condition: productDetail.condition,
              free_shipping: productDetail.shipping.free_shipping,
              sold_quantity: productDetail.sold_quantity,
              description: productDescription.plain_text,
            },
          };
        }
        setResultProductById(product);
      })
      .catch((error) => setError(error));
  };

  const getCategoryProduct = async (search) => {
    await api
      .get(`/sites/MLA/search?q=${search}`)
      .then((response) => {
        const data = response.data;
        const filter =
          data['filters'].length > 0
            ? data['filters']
            : data['available_filters'];

        const categories = filter.filter((item) => item?.id === 'category')[0];

        setCategoryProduct(
          categories.values[0]?.path_from_root.map((item) => item.name)
        );
      })
      .catch((error) => setError(error));
  };

  return {
    getProductsQuery,
    getProductById,
    getCategoryProduct,
    resultQuery,
    resultProductById,
    categoryProduct,
    error,
  };
};

export default useProducts;
