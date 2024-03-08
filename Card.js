// Card.js
import React from 'react';

const Card = ({ title, imageUrl, text, url }) => (
  <a href={url} target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card mb-4">
          <img src={imageUrl} className="card-img-top" alt={title} />
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{text}</p>
          </div>
      </div>
  </a>
);



export default Card;
