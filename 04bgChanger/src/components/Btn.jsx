import React from 'react'

export default function Btn({ color, colChange }) {
  return (
    
    <button
      type="button"
      style={{ backgroundColor: color }}
      className="text-black  font-medium rounded-full text-sm px-4 py-2.5 m-2"
      onClick={colChange}
    >
      {color}
    </button>
  )
}