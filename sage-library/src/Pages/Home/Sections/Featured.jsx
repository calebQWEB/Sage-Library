import FeaturedBook from '../../../Components/FeaturedBook/FeaturedBook';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Featured = () => {
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

  const featuredBooks = [
    {
      index: 0,
      BookName: 'Ephemeral Chronicles',
      BookDescription: 'In a realm where time dances with magic, a young sorcerer seeks to unravel the secrets behind the ephemeral chronicles that shape the destiny of worlds',
      BookAuthor: 'Sophia Belarose'
    },

    {
      index: 1,
      BookName: 'Quantum Nexus',
      BookDescription: 'In the year 2235, humanity discovers the Quantum Nexus—an interdimensional hub that unlocks the door to parallel worlds. A group of daring explorers embarks on a journey to redefine the boundaries of reality.',
      BookAuthor: 'Ethan Mcduke'
    },

    {
      index: 2,
      BookName: 'Silent Shadows',
      BookDescription: 'In the quiet town of Raven"s Hollow, a string of mysterious disappearances casts long shadows. A determined detective must untangle the web of secrets before the town succumbs to its eerie silence.',
      BookAuthor: 'Joshua Jakes'
    },

    {
      index: 3,
      BookName: 'Whispers of Revolution',
      BookDescription: 'Set against the backdrop of a turbulent historical era, this story follows characters navigating love, loss, and political upheaval during a time of revolution.',
      BookAuthor: 'Nicholas Mcklauskey'
    }
  ]
  return (
    <section className='sage__featured-section section-padding'>
      <div className='sage__featured-container'>
        <h1 className='sage__featured-section-header'>Featured Books</h1>

      <Slider {...settings} className='carousel-slider'>
        {
          featuredBooks.map((item) => {
            return (
                <div key={item.index}>
                  <FeaturedBook BookName={item.BookName} BookDescription={item.BookDescription} BookAuthor={item.BookAuthor}/>
                </div>
            )
          })
        }
        </Slider>
      </div>
    </section>
  )
}

export default Featured