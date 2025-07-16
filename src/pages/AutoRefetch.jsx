import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchStockPrice = async () => {
  await new Promise((res) => setTimeout(res, 500));
  const fakePrice = (Math.random() * 1000).toFixed(2);
  return {
    price: fakePrice,
    timestamp: new Date().toISOString()
  };
};

const formatTime = (isoTime) => {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(new Date(isoTime));
};

const AutoRefetch = () => {
  const [isPolling, setIsPolling] = useState(true);

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ['stockPrice'],
    queryFn: fetchStockPrice,
    refetchInterval: isPolling ? 10000 : false,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">4) Auto Refetching Live Stock Price</h2>

      <div className="text-center mb-4">
        <button
          className={`btn ${isPolling ? 'btn-danger' : 'btn-primary'}`}
          onClick={() => setIsPolling((prev) => !prev)}
        >
          {isPolling ? '⏸️ Stop Polling' : '▶️ Start Polling'}
        </button>
      </div>

      {isLoading && <div className="alert alert-info">Loading stock price...</div>}
      {isError && <div className="alert alert-danger">Error: {error.message}</div>}

      {data && (
        <div className="card p-4 text-center">
          <h4 className="text-muted">Stock Price:</h4>
          <h1 className="display-4">₹ {data.price}</h1>
          <p className="text-secondary">Last updated at: <strong>{formatTime(data.timestamp)}</strong></p>
          {isFetching && <small className="text-muted">Updating...</small>}
        </div>
      )}
    </div>
  );
};

export default AutoRefetch;