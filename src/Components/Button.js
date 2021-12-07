import React from "react";


const Button = (props) => {

  const {value,onClick,style} = props
  return <button style={style} onClick={onClick}>{value}</button>
}

export default Button
