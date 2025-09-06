import React from 'react';

const Loading = ({ message = 'Getting products from server...' }) => {
  return (
    <div className="products-container">
      <div className="loading">{message}</div>
    </div>
  );
};

export default Loading;
