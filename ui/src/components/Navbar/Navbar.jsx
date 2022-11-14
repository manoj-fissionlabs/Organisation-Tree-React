import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Popover from '@mui/material/Popover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import userIcon from '../../assets/icons/user-icon.png';
import userIcon1 from '../../assets/icons/user-icon_1.png';
import supportIcon from '../../assets/icons/support.png';
import './Navbar.css';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    handleClose();
    navigate('/');
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRedirect = (_url) => {
    handleClose();
    navigate(`/${_url}`);
  };

  const open = Boolean(anchorEl);
  const id = open ? "menu-items" : undefined;

  return (<nav className="site-navbar">
    <div className="navbar px-4">
      <Link to="/" className="navbar-brand navbar-title">
        Fission Labs
      </Link>
      <div className="navbar-text d-flex align-items-center">
        <span className='pointer' onClick={() => handleRedirect('login')}><span className='mx-2 font-20px'>Login</span></span>
        <span className='mx-3 pointer' onClick={() => handleRedirect('register')}><span className='mx-2 font-20px'>Register</span></span>
        <span className='ms-2 pointer' aria-describedby={id} variant="contained" onClick={handleClick} ><img src={userIcon} alt="" width="20" height="20" /></span>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
        >
          <div>
            <ul className="p-0 m-0 menu-items">
              <li className="menu-item m-2 px-3 py-2 pointer" onClick={() => handleRedirect('register')}>
                <img src={userIcon1} className="ml-2" alt="" width="20" height="20" />
                <span className="m-2"> Register </span>
              </li>
              <li className="menu-item m-2 px-3 py-2 pointer" onClick={() => handleRedirect('login')}>
                <img src={supportIcon} className="ml-2" alt="" width="20" height="20" />
                <span className="m-2"> Login </span>
              </li>
              <li className="menu-item m-2 px-3 py-2 pointer" onClick={handleLogout}>
                <FontAwesomeIcon icon={faArrowRightFromBracket} width="20" height="20" />
                <span className="m-2"> Logout </span>
              </li>
            </ul>
          </div>
        </Popover>
      </div>
    </div>
  </nav>);
};

export default Navbar;
