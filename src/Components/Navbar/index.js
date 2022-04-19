import React from 'react'
import { IoLogoInstagram } from 'react-icons/io'
import { IoMailOutline } from 'react-icons/io5'
import { Nav, NavLink, Bars, NavMenu, NavBtn} from './NavbarElements'

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
          <div className='navLeft'>
            <NavLink to="/">
                <img className='icon' src="https://i.imgur.com/hKIE2K1.jpg" alt="logo" />
            </NavLink>
            <NavMenu>
              <NavLink to="/about">
                About
              </NavLink>
              <NavLink to="/gallery">
                Gallery
              </NavLink>
              <NavLink to="/services">
                Services
              </NavLink>
            </NavMenu>
          </div>
          <Bars onClick={toggle} />
          <NavBtn>
            <a href="https://www.instagram.com/materialtampa/" target="_blank"><IoLogoInstagram size='30' style={{color:"black"}} /></a>
            <a href="mailto: contact@materialtampa.com"><IoMailOutline size='30' style={{color:"black"}} /></a>
          </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar