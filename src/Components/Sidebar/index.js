import React from 'react'
import { FaBorderNone } from 'react-icons/fa'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarBtn, ShopNav } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to='/'>
              Home
            </SidebarLink>
            <SidebarLink to='/about'>
              About
            </SidebarLink>
            <SidebarLink to='/gallery'>
              Gallery
            </SidebarLink>
            <SidebarLink to='/services'>
              Services
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
        <SideBtnWrap>

        </SideBtnWrap>
    </SidebarContainer>
  )
}

export default Sidebar