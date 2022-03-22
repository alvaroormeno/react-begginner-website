import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {Button} from './Button.js';


function Navbar() {

    const [button, setButton] = useState(true);

    const [click, setClick] = useState(false) ;

    const handleClick = () => setClick(!click);

    const closeMobileMenu = ( ) => setClick(false)

    // function that display button inmobile
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    // PREVENTS SIGN UP BUTTON FROM SHOWIN ON MOVBILE NAVBAR AFTER RELOADING
    useEffect( () => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton)


  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>

            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                TRAVEL <i className="fab fa-typo3"></i>
            </Link>
            <div className="menu-icon" onClick={handleClick} >
                <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
            </div>
            <ul className={click ? ' nav-menu active' : 'nav-menu' }>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu} >
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu} >
                        Services
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu} >
                        Products
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu} >
                        Sign Up
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'> SIGN UP!</Button>}
        </div>
    </nav>
    
    
    
    
    </>
  )
}

export default Navbar