import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = ({ noOfStars }) => {
  const [rating, setRating] = useState(0)
  const[hover, setHover] = useState(0)

  const handleMouseEnter = (index) => {
    setHover(index)
  }

  const handleMouseLeave = () => {
    setHover(0)
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        return <FaStar
          style={{
            fontSize: '25px',
            marginRight: '10px',
            cursor: 'pointer'
          }}
          className={`${index >= 3 ? index >= 7 ? 'orange' : 'green': 'red'} ${index <= rating || index <= hover ? 'yellow-fill' : null}`}
          key={index}
          onMouseEnter={() => {handleMouseEnter(index)}}
          onMouseLeave={() => {handleMouseLeave}}
        onClick={() => setRating(index)} />
      })}
    </div>
  )
}

export default StarRating
