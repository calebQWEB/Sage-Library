import Hero from './Sections/Hero'
import './Home.css'
import WhyUs from './Sections/WhyUs'
import TopSages from './Sections/TopSages'
import HowItWorks from './Sections/HowItWorks'
import Featured from './Sections/Featured'
import { useModal } from '../../Components/SignUpModal/Modal'
import SignupModal from '../../Components/SignUpModal/Modal/SignupModal'

const Home = () => {
  const {showModal} = useModal()

  return (
    <main className='sage__main'>
      <Hero />
      <WhyUs />
      <HowItWorks />
      <TopSages />
      <Featured />
      {showModal && (<SignupModal />)}
    </main>
  )
}

export default Home