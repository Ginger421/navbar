import React from 'react'
import logo from './logo.svg'
import {} from ''

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt="picture of flower"/>
          <button className='nav-toggle'>

          </button>
        </div>
        <div className='container show-container'>
          <ul className='page-links'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Extra</a>
            </li>

          </ul>
        </div>
        <ul className='plant-icons'>
        <li>
              <a href='https://plants.usda.gov/'>USDA Plant Database</a>
            </li>
            <li>
              <a href='https://www.fs.usda.gov/detail/fishlake/home/?cid=STELPRDB5393641'>Pando</a>
            </li>
            <li>
              <a href='https://longleafalliance.org/what-is-longleaf/the-ecosystem/habitats/'>Longleaf Pine</a>
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar