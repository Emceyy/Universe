import { useState, useRef } from 'react';
import './Navbar.css'; 
import { FaBars } from 'react-icons/fa'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useRef();
 
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    toggle.current.classList.toggle('open');
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    target.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <nav className="navbar">
      <div className='logo'>E M C E Y</div>
      <div className="close icon" ref={toggle} onClick={toggleNavbar}>
        <FaBars /> 
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#start" onClick={(e) => handleScroll(e, "#start")}>start</a></li>
        <li><a href="#knowledge" onClick={(e) => handleScroll(e, "#knowledge")}>knowledge</a></li>
        <li><a href="#reminder" onClick={(e) => handleScroll(e, "#reminder")}>reminder</a></li>
        <li><a href="#views" onClick={(e) => handleScroll(e, "#views")}>views</a></li>
        <li><a href="#star-wars" onClick={(e) => handleScroll(e, "#star-wars")}>star wars</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
