import React from 'react'
import "../Button/Button.css"


const Button = ({type, onClick, children, width}) => {
  const buttonWidth = {
    width: width || '160px'
  }
  return (
    <button
        className={`button ${type}`}
        onClick={onClick}
        style={buttonWidth}
    >
        {children}
    </button>
    
  )
}

export default Button