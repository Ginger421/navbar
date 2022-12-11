import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter} from '@fortawesome/free-solid-svg-icons'

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

export const social = [
    {
        id: 1,
        url: "www.facebook.com",
        icon: <faFacebook />
    },
    {
        id: 2,
        url: "www.linkedin.com",
        icon: <faLinkedin />
    },
    {
        id: 1,
        url: "www.twitter.com",
        icon: <faTwitter />
    }
]