// CardsContainer.js
const CardsContainer = ({ cardsData }) => (
    <div className="row">
        {cardsData.map((card, index) => (
            <div key={index} className="col-sm-4 mb-4">
                <Card title={card.title} imageUrl={card.imageUrl} text={card.text} />
            </div>
        ))}
    </div>
);
