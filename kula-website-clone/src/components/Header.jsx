import React from 'react'

export default function Header() {
  return (
    <header className='header'>
        <nav className='navbar'>
        <img className='logo' src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/62efcbe40b52a66c04de66ce_Frame%2011.png" alt="logo icon" />
            <ul className='navbar-ul'>
                {/* <li className='navbar-ul-li'></li> */}
                <li className='navbar-ul-li navbar-item'>Product</li>
                <li className='navbar-ul-li navbar-item'>Our Story</li>
                <li className='navbar-ul-li navbar-item'>Resources</li>
            </ul>
        </nav>
        <button className='btn'>Book a demo</button>
    </header>
  )
}
