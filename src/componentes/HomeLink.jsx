import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const HomeLink = () => {
  return (
    <div className='home-link'>
        <Link to='/'>
            <FaHome size={30} />
        </Link>
    </div>
  )
}

export default HomeLink