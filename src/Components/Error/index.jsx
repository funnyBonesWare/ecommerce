const Error = ({ message }) => {
  return (
    <div className="products-container">
      <div className="error">Oops! Something went wrong: {message}</div>
    </div>
  );
};

export default Error;
