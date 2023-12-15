import './WhyUsCard.css'

const WhyUsCard = ({image, cardHeader, info}) => {
  return (
    <div className='sage__whyUsCard'>
        <img src={image} alt={`${cardHeader} icon`} className='sage__whyUsCard-image' />
        <h2 className='sage__whyUsCard-header'>{cardHeader}</h2>
        <p className='sage__whyUsCard-info'>{info}</p>
    </div>
  )
}

export default WhyUsCard