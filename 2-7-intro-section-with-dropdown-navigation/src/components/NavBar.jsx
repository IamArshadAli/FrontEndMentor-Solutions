/* eslint-disable react/prop-types */
import { useMediaQuery } from "react-responsive";

import {
  logo,
  arrowDownIcon,
  arrowUpIcon,
  calendarIcon,
  closeMenuIcon,
  menuIcon,
  planningIcon,
  remindersIcon,
  todoIcon,
} from "../assets/images";
import { useState } from "react";

const Dropdown = ({ name, children }) => {
  const [active, setActive] = useState(false);

  function handleMouseClick() {
    setActive(!active);
  }

  return (
    <li className="relative" onClick={() => handleMouseClick()}>
      <div className="lg:nav__link--highlight dropdown__toggle">
        <p>{name}</p>
        <img
          src={active ? arrowUpIcon : arrowDownIcon}
          alt="arrow"
          className="h-2 w-3"
        />
      </div>
      {active && children}
    </li>
  );
};

const Link = ({ icon, text }) => {
  return (
    <li>
      <a href="#" className="nav__link nav__link--highlight">
        {icon && <img src={icon} alt={text} className="h-4 w-4" />}
        <span>{text}</span>
      </a>
    </li>
  );
};

const FeatureList = () => {
  return (
    <ul className="dropdown__list right-0">
      <Link icon={todoIcon} text="Todo List" />
      <Link icon={calendarIcon} text="Calendar" />
      <Link icon={remindersIcon} text="Reminders" />
      <Link icon={planningIcon} text="Plannig" />
    </ul>
  );
};

const CompanyList = () => {
  return (
    <ul className="dropdown__list">
      <Link text="History" />
      <Link text="Our Team" />
      <Link text="Blog" />
    </ul>
  );
};

const NavLinks = () => {
  return (
    <ul className="nav__list">
      <Dropdown name="Features">
        <FeatureList />
      </Dropdown>
      <Dropdown name="Company">
        <CompanyList />
      </Dropdown>
      <li>
        <a href="#" className="nav__link--highlight">
          Careers
        </a>
      </li>
      <li>
        <a href="#" className="nav__link--highlight">
          About
        </a>
      </li>
    </ul>
  );
};

const LoginRegister = () => {
  return (
    <div className="nav__auth">
      <a href="#" className="nav__link--highlight">
        Login
      </a>
      <a
        href="#"
        className="nav__auth--register"
      >
        Register
      </a>
    </div>
  );
};

const Logo = () => {
  return (
    <a href="#">
      <img src={logo} alt="Logo" className="lg:h-7 lg:w-20" />
    </a>
  );
};

const NavBar = () => {
  const [active, setActive] = useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width:649px)",
  });

  function handleMouseClick() {
    setActive(!active);
  }

  return (
    <nav className="nav">
      {isMobile ? (
        <>
          <Logo />
          <img
            src={active ? closeMenuIcon : menuIcon}
            alt={active ? "close icon" : "menu icon"}
            className="z-50"
            onClick={() => handleMouseClick()}
          />
          {active && (
            <>
              <div className="nav__mobile">
                <NavLinks />
                <LoginRegister />
              </div>
              <div className="nav__mobile--overlay"></div>
            </>
          )}
        </>
      ) : (
        <>
          <div className="nav__desktop">
            <Logo />
            <NavLinks />
          </div>
          <LoginRegister />
        </>
      )}
    </nav>
  );
};

export default NavBar;
