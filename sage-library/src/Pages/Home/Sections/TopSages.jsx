import TopSageCard from "../../../Components/TopSageCard/TopSageCard";
import topSage1 from "../../../assets/top-sages/top-sage1.png";
import topSage2 from "../../../assets/top-sages/top-sage2.jpg";
import topSage3 from "../../../assets/top-sages/top-sage3.png";
import {motion, useAnimation} from 'framer-motion'
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const TopSages = () => {
  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const animation = useAnimation()

  useEffect(() => {
    if(inView) {
      animation.start({
        y: 0,
        scale: 1,
        opacity: 1,
        transition: { type: 'tween', duration: 0.8 },
      })
    }

    if (!inView) {
      animation.start({
        y: [0, -20, -40],
        scale: 0.8,
        opacity: 0.8,
      })
    }
  }, [inView, animation])

  const sageInfo = [
    {
      index: 1,
      sageImage: topSage1,
      sageName: "Jessica Simmons",
      bookAmount: 15,
    },

    {
      index: 2,
      sageImage: topSage2,
      sageName: "Bodrick Johnson",
      bookAmount: 11,
    },

    {
      index: 3,
      sageImage: topSage3,
      sageName: "Miguel Sanchez",
      bookAmount: 10,
    },
  ];

  return (
    <section className="sage__top-sages-section section-padding">
      <div ref={ref}>
        <h1 className="sage__top-sages-section-header">Sages of the Week</h1>

        <div className="sage__top-sages">
          {sageInfo.map((item) => {
            return (
              <motion.div key={item.index} className='top-sage-card-wrapper' animate={animation}>
                  <TopSageCard
                    image={item.sageImage}
                    name={item.sageName}
                    bookAmount={item.bookAmount}
                    index={item.index}
                  />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopSages;
