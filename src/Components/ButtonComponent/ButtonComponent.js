import React from 'react'
import './ButtonStyles.css';




function ButtonComponent(props) {
  return (
    
    <button id={props.id} className='btn btn-dark' onClick={props.clickHandler}>{props.name}</button>
  )
}

export default ButtonComponent