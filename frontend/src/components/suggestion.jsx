import React from 'react';
import '../components/style/sugestion.css';

const Suggestion = () => {
  const suggestions = [
    'Professional', 'Modern', 'Simple', 'Minimalistic', 'Corporate',
    'Creative', 'Academic', 'Scholarship', 'College', 'Engineering'
  ];

  return (
    <div className="suggestion">
      {suggestions.map((item, index) => (
        <div key={index}>
          <a href="#"><button><span>{item}</span></button></a>
        </div>
      ))}
    </div>
  );
};

export default Suggestion;
