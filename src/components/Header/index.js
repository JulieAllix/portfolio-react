import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import classNames from 'classnames';

import HeaderStyled from './HeaderStyled';

const Header = ({ menuIsOpen, changeOpeningStatus }) => {
  const handleClick = () => {
    changeOpeningStatus(!menuIsOpen);
  };
  const close = () => {
    changeOpeningStatus(false);
  };
  return (
    <HeaderStyled>
      <h1 className="julie">Julie Allix</h1>
      <div className="burger-menu">
        <div className="burger-menu-icon">
          <Icon name="bars" size="big" color="grey" onClick={handleClick} />
        </div>
        <ul
          className={classNames({
            'menu--open': menuIsOpen,
            'dropdown-burger': true,
          })}
        >
          <Link to="/">
            <li className="burger-menu-link" onClick={handleClick}>Home</li>
          </Link>
          <Link to="/contact">
            <li className="burger-menu-link" onClick={handleClick}>Contact</li>
          </Link>
          <Link to="/oclock">
            <li className="burger-menu-link" onClick={handleClick}>My training</li>
          </Link>
        </ul>
      </div>

      <ul className="menu">
        <li id="projects" className="menu-link" onClick={handleClick}>Projects</li>
        <ul className="dropdown">
          <Link to="/grocereaz">
            <li
              className={classNames({
                'menu--open': menuIsOpen,
                'dropdown-item': true,
                grocereaz: true,
              })}
              onClick={handleClick}
            >
              Grocer'eaz
            </li>
          </Link>
          <Link to="/break-free">
            <li
              className={classNames({
                'menu--open': menuIsOpen,
                'dropdown-item': true,
                'break-free': true,
              })}
              onClick={handleClick}
            >
              Break Free
            </li>
          </Link>
          <Link to="/portfolio">
            <li
              className={classNames({
                'menu--open': menuIsOpen,
                'dropdown-item': true,
                portfolio: true,
              })}
              onClick={handleClick}
            >
              Portfolio
            </li>
          </Link>
          <Link to="/study-cards">
            <li
              className={classNames({
                'menu--open': menuIsOpen,
                'dropdown-item': true,
                'study-cards': true,
              })}
              onClick={handleClick}
            >
              Study Cards
            </li>
          </Link>
        </ul>
        <Link to="/">
          <li className="menu-link" onClick={close}>Home</li>
        </Link>
        <Link to="/oclock">
          <li className="menu-link" onClick={close}>My training</li>
        </Link>
        <Link to="/contact">
          <li className="menu-link" onClick={close}>Contact</li>
        </Link>
      </ul>
    </HeaderStyled>
  );
};

Header.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired,
  changeOpeningStatus: PropTypes.func.isRequired,
};

// == Export
export default Header;
