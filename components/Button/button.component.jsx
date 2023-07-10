import React from 'react'

const Button = ({props}) => {
  return (
    <button
    className={`px-4 py-2 items-center rounded-lg hover:bg-white/50 hover:text-white bg-white/20 text-white/50 hover:shadow-xl transition-all`}
  >
    {props}
  </button>
);
}

export default Button