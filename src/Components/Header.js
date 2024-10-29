import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/icon2.png'
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    setDropdownOpen(!isDropdownOpen);
    document.body.style.overflow = click ? 'auto' : 'hidden'; // Disable or enable scrolling
    

    

  }

  const closeMenuBar = () => {
    setClick(false);
    document.body.style.overflow = 'auto'; // Enable scrolling

  };


  const [activeNav, setActiveNav] = useState('/')



  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };


  return (
    <header>
        <nav>
            <div className="logo">
                <Link to='/'>
                    <img src={logo} alt="" onClick={closeMenuBar}/>
                </Link>
            </div>


            <div className='bars' onClick={handleClick}>
          {click ? (<IoCloseSharp id='close' />) : (<FaBars id='bar' />)}
        </div>

            <ul className={click ? 'actives' : 'menu'}>

                <li><Link to='/' onClick={closeMenuBar}>Home</Link></li>
                <li><Link to='/plans' onClick={closeMenuBar}>Our Health Plans</Link></li>
                <li><Link to='/provider' onClick={closeMenuBar}>Our Providers</Link></li>
                <li><Link to='/about' onClick={closeMenuBar}>About Us</Link></li>
                <li><Link to='/contact' onClick={closeMenuBar}>Contact Us</Link></li>

            </ul>
        </nav>

        <div className={click ? 'cover' : 'cover active'}></div>

    </header>
  )
}

export default Header