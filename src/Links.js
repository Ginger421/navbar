import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export const links = [
    {
        id: 1,
        url: '/',
        text: 'Home',
    },
    {
        id: 2,
        url: '/about',
        text: 'About',
    },
    {
        id: 3,
        url: 'contact',
        text: 'Contact'
    }
]

export const socialMedia = [
    {
        id: 1,
        url: "www.facebook.com",
        icon: <FontAwesomeIcon icon={faFacebook} />
    },
    {
        id: 2,
        url: "www.linkedin.com",
        icon: <FontAwesomeIcon icon={faLinkedin} />
    },
    {
        id: 3,
        url: "www.twitter.com",
        icon: <FontAwesomeIcon icon={faTwitter} />
    }
]