import React from 'react'

const Card = ({img, alt, title, size}) => {
    const cardStyle = {
        width: size || '90px',
        height: size || '90px'
    }
  return (
    <div className='card-container'>
        <div className='card' style={cardStyle}>
            <img className='card-img' src={img} alt={alt} />
        </div>
        <h3>{title}</h3>
    </div>
  )
}

export default Card