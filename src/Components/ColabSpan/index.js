import React from 'react';
import './ColabSpan.css';

function ColabSpan({ image, title, type }) {
  return (
      <div className="colabSpanWrap">
          <div className="imageColab" style={{backgroundImage: `url(${image})`}}></div>
          <h3>{title}</h3>
          <h4>{type}</h4>
      </div>
  )
}

export default ColabSpan;