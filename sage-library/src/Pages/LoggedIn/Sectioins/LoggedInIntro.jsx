import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import intro1 from "../../../assets/LoggedIn-section/intro/intro-1.jpg";
import intro2 from "../../../assets/LoggedIn-section/intro/intro-2.jpg";
import intro3 from "../../../assets/LoggedIn-section/intro/intro-3.jpg";
import { useAuth } from "../../../utils/Auth";
import { useState, useEffect } from "react";

const LoggedInIntro = () => {
  const [loading, setLoading] = useState(true)
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const introImages = [intro1, intro2, intro3];
  const auth = useAuth()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUserData = localStorage.getItem("user")

        if (storedUserData) {
          const userData = JSON.parse(storedUserData)

          auth.login(userData)
        } else {
          console.log('User data not found in local storage')
        }
      } catch (error) {
        console.error('Error fetching data', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [auth])

  return (
      <header className="section-padding loggedInIntro">
        {loading? (
          <h1 className="sage__loggedInIntro-header">User</h1>
        ):(
          <h1 className="sage__loggedInIntro-header">Hi {auth.user?.loginUsername}</h1>
        )}
        <span>Here's whats new</span>

        <Slider {...settings} className="loggedIn__carousel">
          {introImages.map((item, index) => {
            return (
              <div key={index}>
                <h2 className="loggedIn__image-header">
                  Mystery, Mystery and more Mystery
                </h2>
                <img
                  src={item}
                  alt="Intro Image"
                  className="logggedIn__intro-image"
                />
              </div>
            );
          })}
        </Slider>
      </header>
  );
};

export default LoggedInIntro;
