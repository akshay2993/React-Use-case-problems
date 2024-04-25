import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = ({ noOfStars }) => {
  const [rating, setRating] = useState(0)
  const[hover, setHover] = useState(0)

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index +=1

        return <FaStar
          style={{
            fontSize: '40px',
            marginRight: '10px',
            cursor: 'pointer'
          }}
          className={index <= (hover || rating) ? 'active' : 'inactive'}
          key={index}
          onMouseEnter={() => setHover(index)}
          onMouseLeave={() => setHover(rating)}
        onClick={() => setRating(index)} />
      })}
    </div>
  )
}

export default StarRating
