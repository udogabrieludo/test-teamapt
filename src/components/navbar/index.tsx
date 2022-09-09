import React from 'react'
import { Nav,NavItem,NavGroup, NavLinkItem,Cart, } from './styles/navbar.style'
import { Link } from 'react-router-dom'
import { Container } from '../grid-layout'
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Color } from '../../assets/theme';
import appLogo from '../../assets/images/app-logo.png';


const Navbar:React.FC = () => {

  return (
    <Nav>
       <Container>
           <NavItem>
               <Link to='#'>
                <img src={appLogo} alt={'app-log'} />
               </Link>              
                <NavGroup>       
                    <NavLinkItem > 
                      <Link to='#' >
                        Product
                      </Link>                                                 
                    </NavLinkItem>
                    <NavLinkItem > 
                    <Link to='#' >
                        About
                      </Link>                             
                    </NavLinkItem>
                      <NavLinkItem > 
                        <Link to='#' >
                          Blog
                        </Link>                         
                      </NavLinkItem>
                     <NavLinkItem > 
                       <Link to='#' >
                        Reviews
                      </Link>                         
                    </NavLinkItem>
                    <Cart>
                       <span className={'badge'}>1</span>
                      <HiOutlineShoppingBag size={20} color={Color.white}/>
                    </Cart>
                </NavGroup>
             
           </NavItem>
        </Container>
    </Nav>
  )
}

export default Navbar 