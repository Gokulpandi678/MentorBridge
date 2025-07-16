import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchProducts = async (page) => {
  const limit = 5;
  const skip = page * limit;
  const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
};

const Pagination = () => {
  const [page, setPage] = useState(0);

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ['products', page],
    queryFn: () => fetchProducts(page),
    keepPreviousData: true,
  });

  const totalPages = data ? Math.ceil(data.total / 5) : 0;

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">5) Product Listing using Pagination </h2>
      <h4 className='text-center'>(Page {page + 1})</h4>
      {isLoading && <p className="text-center">Loading...</p>}
      {isError && <p className="text-danger text-center">Error: {error.message}</p>}

      {data && (
        <div>
          <ul className="list-group mb-4">
            {data.products.map((product) => (
              <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{product.title}</span>
                <span className="badge bg-success">₹ {product.price}</span>
              </li>
            ))}
          </ul>

          {isFetching && <p className="text-muted text-center">Fetching new page...</p>}

          <div className="d-flex justify-content-between">
            <button
              className="btn btn-outline-secondary"
              onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
              disabled={page === 0}
            >
              ◀ Previous
            </button>

            <button
              className="btn btn-outline-primary"
              onClick={() => setPage((prev) => prev + 1)}
              disabled={page + 1 >= totalPages}
            >
              Next ▶
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pagination;