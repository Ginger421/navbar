import React from 'react'
import './Navbar.css';
import { links, social } from './Links' 

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src='' alt="picture of flower"/>
          <button className='nav-toggle'>

          </button>
        </div>
        <div className='container show container'>
          <ul className='page-links'>
          {links.map((link) => {
            const {id, url, text} = 'link';
            return <li key={id}>
              <a href={url}>{text}</a>                
            </li>
          }
          )}
          </ul>
        </div>
        <ul className='plant-icons'>
        {social.map((social) => {
            const {id, url, icon} = 'social';
            return <li key={id}>
              <a href={url}>{icon}</a>                
            </li>
          }
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar