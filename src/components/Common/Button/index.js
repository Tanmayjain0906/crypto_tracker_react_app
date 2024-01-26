import React from 'react'
import "./style.css"

function Button({text, outline}) {
  return (
    <div className={`${outline ? "outline-btn" : "btn"}`} >{text}</div>
  )
}

export default Button