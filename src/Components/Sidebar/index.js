import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap} from './SidebarElements'

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
            <SidebarLink to='/services'>
              Services
            </SidebarLink>
            <SidebarLink to='/gallery'>
              Gallery
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
        <SideBtnWrap>

        </SideBtnWrap>
    </SidebarContainer>
  )
}

export default Sidebar