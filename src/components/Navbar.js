import React, {useState} from 'react'
import { Link } from 'react-router-dom'


function Navbar() {

    const [click, setClick] = useState(false) ;

    const handleClick = () => setClick(!click);

    const closeMobileMenu = ( ) => setClick(false)


  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>

            <Link to="/" className="navbar-logo" >
                TRAVEL <i className="fab fa-typo3"></i>
            </Link>
            <div className="menu-icon" onClick={handleClick} >
                <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
            </div>
            <ul className={click ? ' nav-menu active' : 'nav-menu' }>
                <li className='nav-item'>
                    <Link to='/' className='nab-links' onClick={closeMobileMenu} >
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/services' className='nab-links' onClick={closeMobileMenu} >
                        Services
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/products' className='nab-links' onClick={closeMobileMenu} >
                        Products
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nab-links-mobile' onClick={closeMobileMenu} >
                        Sign Up
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    
    
    
    
    </>
  )
}

export default Navbar