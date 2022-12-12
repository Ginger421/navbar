import React from 'react'
import './Navbar.css';
import { links, socialMedia } from './Links' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src='' alt="alt"/>
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
        <ul className='media-icons'>
        {socialMedia.map((social) => {
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