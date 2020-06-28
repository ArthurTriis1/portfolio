import React from 'react';
import './ColabSpan.css';

function ColabSpan({ image, title, type, href }) {
  return (
      <div className="colabSpanWrap" onClick={() =>{
            if(href){
              window.location.href = href
            } 
         }}>
          <div className="imageColab" style={{backgroundImage: `url(${image})`}}></div>
          <h3>{title}</h3>
          <h4>{type}</h4>
      </div>
  )
}

export default ColabSpan;