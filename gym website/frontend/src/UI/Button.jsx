import React from 'react'
import classes from './Button.module.css'

const Button = (props, {children}) => {
  return (
    <button className={classes[props.button]}>{children}</button>
  )
}

export default Button