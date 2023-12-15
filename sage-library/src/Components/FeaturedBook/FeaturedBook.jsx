import "./FeaturedBook.css";
import BookIcon from "../../assets/Featured-Books/3d-book.png";

const FeaturedBook = ({ BookName, BookDescription, BookAuthor }) => {
  return (
    <div className="sage__featured-book">
      <div className="sage__featured-book-image-container">
        <img
          src={BookIcon}
          alt={BookName}
          className="sage__featured-book-image"
        />
      </div>

      <div className="sage__featured-book-details">
        <h1 className="sage__featured-book-title">{BookName}</h1>
        <p className="sage__featured-book-description">{BookDescription}</p>
        <span className="sage__featured-book-author">-{BookAuthor}</span>
      </div>
    </div>
  );
};

export default FeaturedBook;
