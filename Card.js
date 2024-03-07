// Card.js
import React from 'react';

const Card = ({ title, imageUrl, text }) => (
  <div className="card" style={{ width: '18rem' }}>
    <img src={imageUrl} className="card-img-top" alt={title} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </div>
  </div>
);

export default Card;
