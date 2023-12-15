import WhyUsCard from "../../../Components/WhyusCard/WhyUsCard"
import collaborate from '../../../assets/whyus/handshake.png'
import learn from '../../../assets/whyus/learn.png'
import create from '../../../assets/whyus/lightbulb.png'


const WhyUs = () => {
  return (
    <section className="section-padding">
        <h1 className="sage__whyus-header">Why Sage?</h1>
        <div className="sage__whyusCards">
            <WhyUsCard image={learn} cardHeader='Learn' info='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea maiores unde nostrum sunt aliquid in similique maxime pariatur alias! Animi!'/>
            <WhyUsCard image={create} cardHeader='Create' info='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea maiores unde nostrum sunt aliquid in similique maxime pariatur alias! Animi!'/>
            <WhyUsCard image={collaborate} cardHeader='Collaborate' info='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea maiores unde nostrum sunt aliquid in similique maxime pariatur alias! Animi!'/>
        </div>
    </section>
  )
}

export default WhyUs