import React from 'react'
import { IoLogoInstagram } from 'react-icons/io'
import { IoMailOutline } from 'react-icons/io5'
import { Nav, NavLink, Bars, NavMenu, NavBtn} from './NavbarElements'

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
          <div className='navLeft'>
            <NavMenu>
              <NavLink to="/">
                Home
              </NavLink>
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
            <a href="https://www.instagram.com/lobolandscapeltd/" target="_blank" rel='noreferrer'><IoLogoInstagram size='30' style={{color:"white"}} /></a>
            <a href="mailto: lobolandscapeltdltd@gmail.com"><IoMailOutline size='30' style={{color:"white"}} /></a>
          </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar