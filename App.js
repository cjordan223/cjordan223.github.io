// App.js
import React from 'react';
import CardsContainer from './CardsContainer'; // Make sure the path to CardsContainer.js is correct

const App = () => {
  const cardsData = [
    {
      title: 'Card 1',
      imageUrl: 'https://via.placeholder.com/150',
      text: 'This is the first card',
    },
    {
      title: 'Card 2',
      imageUrl: 'https://via.placeholder.com/150',
      text: 'This is the second card',
    },
    {
      title: 'Card 3',
      imageUrl: 'https://via.placeholder.com/150',
      text: 'This is the third card',
    },
    // Add more card data as needed`
  ];dawldkajldkajdklajdlkawdajdlkajg

  return (
    <div>
      <h1>My Cards</h1>
      <CardsContainer cardsData={cardsData} />
    </div>
  );
};

export default App;
