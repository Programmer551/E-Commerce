import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1 className='title headings'>E-Commerce</h1>
      <ul className='nav-ul'>
        <li className='nav-li'>
          <Link to='/main'>Home</Link>
        </li>
        <li className='nav-li'>
          <Link to='/about'>About</Link>
        </li>
        <li className='nav-li'>
          <Link to='/services'>Services</Link>
        </li>
        <li className='nav-li'>
          <Link to='/contact'>Contact us</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
