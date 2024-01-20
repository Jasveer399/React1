import React from 'react'

function Button({className}) {
  return (
    <button type="button" className={` py-3 px-7 rounded-lg  mt-8 ${className} text-[17px]`}>
    Get start
  </button>
  )
}

export default Button