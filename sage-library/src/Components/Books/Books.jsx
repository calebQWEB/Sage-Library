import './Books.css'

const Books = ({bookImage, bookTitle}) => {
  return (
    <div className='book-container'>
      <img src={bookImage} alt={bookTitle} className='book-image'/>
    </div>
  )
}

export default Books