import { useState } from "react";
import useApi from "../../../Api/Api";
import { v4 as uuidv4 } from "uuid";

const ReadAgain = () => {
  const [showModal, setShowModal] = useState(false);

  // Api settings
  const API_KEY = "AIzaSyCH-c5_Pn98z_hEA1Fds6qhkFPhjd8ayUs";
  const url = `https://www.googleapis.com/books/v1/volumes?q=history&key=${API_KEY}`;
  const { data, error, loading } = useApi(url);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const itemsToDisplay = data.items.slice(0, 4);

  const modalClick = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <section className="section-padding loggedIn__read-again">
      <div className="loggeIn__read-again-header-wrapper">
        <div className="loggedIn__read-again-header-container">
          <h1 className="loggedIn__read-again-header">Read Again</h1>
          <span>Books you have read</span>
        </div>
        <button className="loggedIn__read-again-button" onClick={modalClick}>
          {showModal ? "Close" : "More"}
        </button>
      </div>

      <div className="loggedIn__read-again-container">
        {itemsToDisplay.map((item) => {
          return (
            <div key={uuidv4()} className="loggedIn__read-again-book-container">
              <img
                src={item.volumeInfo.imageLinks.thumbnail}
                alt={item.volumeInfo.title}
                className="loggedIn__read-again-book-image"
              />
              <h2 className="loggedIn__read-again-book-title">
                {item.volumeInfo.title}
              </h2>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="loggedIn__read-again-modal">
          {data.items.map((item) => {
            return (
              <div
                key={uuidv4()}
                className="loggedIn__modal-read-again-book-container"
              >
                <img
                  src={item.volumeInfo.imageLinks.thumbnail}
                  alt={item.volumeInfo.title}
                  className="loggedIn__modal-read-again-book-image"
                />
                <h2 className="loggedIn__modal-read-again-book-title">
                  {item.volumeInfo.title}
                </h2>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default ReadAgain;
