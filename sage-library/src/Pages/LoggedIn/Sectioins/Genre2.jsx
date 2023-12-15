import useApi from "../../../Api/Api";
import {v4 as uuidv4} from 'uuid'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Books from "../../../Components/Books/Books";

const Genre2 = () => {
      // Api settings
  const API_KEY = "AIzaSyCH-c5_Pn98z_hEA1Fds6qhkFPhjd8ayUs";
  const url = `https://www.googleapis.com/books/v1/volumes?q=thriller&key=${API_KEY}`;
  const { data, error, loading } = useApi(url);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

//   Carousel settings
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      }
    ]
  };
  return (
    <section className="section-padding">
        <div className="loggedIn__genre-2-header-container">
            <h1 className="loggedIn__genre-2-header">You like thriller</h1>
        </div>
        <Slider {...settings} className="loggedIn__genre-2-books">
          {data.items.map((item) => {
            return (
                <div key={uuidv4()}>
                    <Books bookImage={item.volumeInfo.imageLinks.thumbnail} bookTitle={item.volumeInfo.title} />
                </div>
            );
          })}
      </Slider>
    </section>
  )
}

export default Genre2