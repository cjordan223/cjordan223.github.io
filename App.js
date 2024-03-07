<script type="text/babel">
  const Card = ({ title, imageUrl, text }) => (
    <div className="card" style={{ width: '18rem' }}>
      <img src={imageUrl} className="card-img-top" alt="Card image" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
  
  const CardsContainer = ({ cardsData }) => (
    <div className="container">
      <div className="row">
        {cardsData.map((card, index) => (
          <div key={index} className="col-sm-3 mb-4">
            <Card title={card.title} imageUrl={card.imageUrl} text={card.text} />
          </div>
        ))}
      </div>
    </div>
  );
  
  class App extends React.Component {
    render() {
      const cardsData = [
        { title: 'Card 1', imageUrl: 'https://via.placeholder.com/150', text: 'This is the first card', },
        { title: 'Card 2', imageUrl: 'https://via.placeholder.com/150', text: 'This is the second card', },
        // ... Add 6 more cards
        { title: 'Card 3', imageUrl: 'https://connerjordan.com/Markov/', text: 'This is the third card', },
        { title: 'Card 4', imageUrl: 'https://via.placeholder.com/150', text: 'This is the fourth card', },
        { title: 'Card 5', imageUrl: 'https://via.placeholder.com/150', text: 'This is the fifth card', },
        { title: 'Card 6', imageUrl: 'https://via.placeholder.com/150', text: 'This is the sixth card', },
        { title: 'Card 7', imageUrl: 'https://via.placeholder.com/150', text: 'This is the seventh card', },
        { title: 'Card 8', imageUrl: 'https://via.placeholder.com/150', text: 'This is the eighth card', },
      ];
    
      return <CardsContainer cardsData={cardsData} />;
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('react-root'));
</script>
