import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
    background: #fff;
    height: 100px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`

export const NavLink = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: 400;
    font-family:"Helvetica Now Bold";

    &.active {
        color: #9f9f9f;
    }
`

export const ShopNav = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: 400;
`

export const Bars = styled(FaBars)`
    display: none;
    color: #000;

    @media screen and (max-width: 900px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 120%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 900px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 900px) {
        display: none;
    }
`

export const NavBtnA = styled.div`
    border-radius: 5px;
    background: #000;
    padding: 10px 15px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-right: 10px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #9f9f9f;
    }
`