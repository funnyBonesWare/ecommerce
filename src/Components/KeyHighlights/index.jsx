import './styles.css';

const KeyHighlights = ({ 
  highlights = [],
  title = "Key Highlights",
  brand = ""
}) => {
  const defaultHighlights = [
    `High quality ${brand} product`,
    "Excellent customer ratings",
    "Fast delivery available",
    "Easy returns & exchanges"
  ];

  const displayHighlights = highlights.length > 0 ? highlights : defaultHighlights;

  return (
    <div className="key-highlights">
      <h3>{title}</h3>
      <ul>
        {displayHighlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
    </div>
  );
};

export default KeyHighlights;
