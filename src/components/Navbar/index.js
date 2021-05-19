import React, {useState, useEffect } from 'react';  //we are useing react hooks useState
import { FaBars, FaTimes} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
    NavMenu, 
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from './Navbar.Styled';
import Dropdown from '../Dropdown';
import Logo from '../../icons/logo4.JPG';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };

      useEffect(() => {
        showButton();
      }, []);
    
    window.addEventListener('resize', showButton);  

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
    
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };

    return (
       <>
        <IconContext.Provider value={{ color: '#653275' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo  onClick={handleClick} to="/">
                        <img 
                        src={Logo} 
                        width="350" 
                        sizes="(max-width: 991px) 100vw, (max-width: 1439px) 200px, 250px"
                        scrset="{Logo} 500w, {Logo} 720w, {Logo} 1080w, {Logo} 1600w, {Logo} 2000w, {Logo} 3852w"
                        alt="logo-company"
                        ></img> 
                    </NavLogo>

                    <MobileIcon onClick={handleClick}>
                         {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                   
                    <NavMenu onClick={handleClick} click={click}>
                                                              
                        <NavItem 
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        >
                            <NavLinks
                               to='/services'
                            >
                               Tjänster
                            </NavLinks>
                            {dropdown && <Dropdown />}
                        </NavItem> 
                        <NavItem>                                       
                            <NavLinks to='/rut'>
                               RUT-Avdrag
                           </NavLinks>
                        </NavItem>                                     
                        <NavItem>
                            <NavLinks to='/about'>
                               Om Oss
                            </NavLinks>
                        </NavItem>                 
                        <NavItem>
                            <NavLinks to='/contact'>
                               Kontakt
                            </NavLinks>
                        </NavItem>

                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to='/contact'>
                                    <Button primary>Kontakta Oss</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to='/contact'>
                                    <Button onClick={closeMobileMenu} fontBig primary>
                                        Kontakta Oss
                                    </Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>

                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
      </>
    );
}

export default Navbar

