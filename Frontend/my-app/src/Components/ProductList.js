import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8090/api')
      .then((response) => {
        setProducts(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mt-5 text-success">
      <h1 className="text-center mb-4 text-primary">Product List</h1>
      <ul className="list-unstyled d-flex justify-content-center gap-5 mt-5">
        {products.map((product) => (
          <li key={product._id} className="media mb-4">
            <img src={product.imageURLs} alt={`Product ${product.title}`} className="mr-3" style={{ width: '100px' }} />
            <div className="media-body">
              <h3 className="mt-0">{product.title}</h3>
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
