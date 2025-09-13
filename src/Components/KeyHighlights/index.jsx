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
    <div className="key-highlights bg-white p-3 rounded shadow">
      <h3 className="text-primary text-base font-semibold mb-2">{title}</h3>
      <ul className="space-y-1">
        {displayHighlights.map((highlight, index) => (
          <li key={index} className="text-secondary text-sm flex items-start">
            <span className="text-primary mr-2">•</span>
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeyHighlights;
