import React from 'react'

const Button = ({text, bgColor, textColor, extraClass}) => {
  return (
    <button className={`${bgColor} ${textColor} ${extraClass} transition-all rounded-full py-3 px-5 hover:shadow-xl focus:shadow-outline w-full flex-nowrap whitespace-nowrap`}>{text}</button>
  )
}

export default Button