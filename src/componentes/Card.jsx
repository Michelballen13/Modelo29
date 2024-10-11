import React from 'react'

function Card({children , reverse}) {
  return (
    <div>
      <div className={` card ${reverse && 'reverse'  }`} >{ children } </div>
    </div>
  )
}

export default Card