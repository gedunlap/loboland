import React from 'react'
import { FiPhoneCall } from "react-icons/fi";


function Header() {
  return (
    <div className='header'>
        <img className='headerLogo' src="https://i.imgur.com/O5lolqE.jpg" alt="header logo" />
        <p>
          16 Garden Avenue P.O Box 202, Delaware Ontario Canada N0L 1E0
          <br />
          <br />
          <FiPhoneCall size='20' style={{color:"white", marginRight:"10px"}} />519 666 0296
        </p>
    </div>
  )
}

export default Header