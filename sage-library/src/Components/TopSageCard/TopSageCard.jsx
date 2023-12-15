import "./TopSageCard.css";

const TopSageCard = ({ image, name, bookAmount, index }) => {

  return (
    <div className="top-sage-card">
      <img src={image} alt={name} className="top-sage-card-image" />
      <h2>{name}</h2>
      <div className="top-sage-book-number">{`Books: ${bookAmount}`}</div>
      <button className="top-sage-card-button">View Profile</button>
    </div>
  );
};

export default TopSageCard;
