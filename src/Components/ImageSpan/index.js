import React from 'react';
import './ImageSpan.css';

function ImageSpan({ image, title, subtitle }) {
  return (
      <div className="imageWrap">
          <img src={image} alt="imageText"/>
          {  title    && <h3 className="imageTitle">{title}</h3>       }
          {  subtitle && <h4 className="imageSubtitle">{subtitle}</h4> }
      </div>
  )
}

export default ImageSpan;