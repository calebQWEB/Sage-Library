import React from 'react'
import './footer.css'
import Logo from '../../assets/Logo/Logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='sage__footer section-padding'>
        <div className='sage__footer-container'>
            <ul className='sage__footer-links-1'>
                <li><img src={Logo} alt="Sage Logo" className='sage__footer-logo' /></li>
                <li><Link>Try Premium</Link></li>
                <li><Link>Get the App</Link></li>
                <li><Link>Patnership</Link></li>
                <li><Link>Sponsors</Link></li>
                <li>Contact</li>
            </ul>
            <ul className='sage__footer-links-2'>
                <li><Link>Terms</Link></li>
                <li><Link>Privacy</Link></li>
                <li><Link>Accessiblity</Link></li>
                <li><Link>Help</Link></li>
                <li>&copy; 2023 Sage. All rights reserved.</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer