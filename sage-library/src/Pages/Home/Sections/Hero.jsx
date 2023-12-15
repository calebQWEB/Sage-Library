import girlBooks from '../../../assets/Hero/girl-books.png'
import andrea from '../../../assets/Hero/members/andrea.jpg'
import anna from '../../../assets/Hero/members/anna.jpg'
import dellon from '../../../assets/Hero/members/dellon.jpg'
import manStudy from '../../../assets/Hero/man-study.png'
import girlReading from '../../../assets/Hero/girl-reading.png'
import { useEffect, useState } from 'react'
import { IoSparklesSharp } from "react-icons/io5";

const Hero = () => {
  const text = ['Fingertips', 'Touchpoints', 'Digital Touch']
  const images = [girlBooks, girlReading, manStudy]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <header className='section-padding'>
      <IoSparklesSharp size={40}/>
      <div className="sage__hero-container-wrapper">        
        <article className="sage__hero-container">
          <h1 className="sage__hero-intro">
            The whole knowledge in the world is at your <span>{text[currentIndex]}</span>.
          </h1>
          <p className="sage__hero-sub-intro">Join us in embracing the magic of literature as we turn
            the pages of possibility together.
          </p>

        
          <div className='sage__members-overall-container'>
            <picture className='sage__members-container'>
              <img src={andrea} alt="members" className='sage__members-image' />
              <img src={anna} alt="members" className='sage__members-image' />
              <img src={dellon} alt="members" className='sage__members-image' />
            </picture>


            <div className='sage__number-of-users'>
              <h2>1.3M+</h2>
              <p>Active users</p>
              <p>Across the world</p>
            </div>
          </div>

          <div className='sage__cta-button'>
            <button>How does it work</button>
            <button>Get Started</button>
          </div>
        </article>

        <picture>
          <img src={images[currentIndex]} alt="3d illustration of a girl holding a stack of books" className='sage__intro-image'/>
        </picture>

        <IoSparklesSharp size={40}/>
      </div>
    </header>
  );
};

export default Hero;
