import { Link, NavLink, useLocation } from "react-router-dom";
import { Navs } from "../Navigation";
import Logo from "../../../assets/images/OBODOLOGO.svg";
import Hamburger from "../../../assets/images/Hamburger.svg";
import "./header.scss";
import styles from "../../../shared/components/Navigation/navigation.module.scss";
import { useRef } from "react";
import Caret from "../../../assets/images/caret.svg";
import { Button, Dropdown } from "react-bootstrap";
import { useAuth } from "../../../store/AuthContext";

const navList: Navs[] = [
  {
    path: "/dashboard",
    text: "Dashboard"
  },
  {
    path: "/episodes",
    text: "Episodes",
  },
  {
    path: "/exchange-program",
    text: "Language Program",
  },
  {
    path: "",
    text: "Resources",
    isDropdown: true,
    dropdownItems: [
      {
        path: "/transcripts",
        text: "Transcripts",
      },
      // {
      //   path: "",
      //   text: "Planner",
      // },
      {
        path: "",
        text: "Shop",
      },
    ],
  },
  {
    path: "/about-us",
    text: "About Us",
  },
  {
    path: "/login",
    text: "Login"
  }
];
const Header = () => {
  const inputRef = useRef<any>();
  const location = useLocation();
  const auth = useAuth();

  const clickHandler = () => {
    inputRef.current.checked = false;
  };

  const navigateToPlanner = () => {
    inputRef.current.checked = false;
    window.open("https://oganiruplanner.square.site/", "_blank");
  };

  const navigateToShop = () => {
    inputRef.current.checked = false;
    window.open("https://shopobodo.square.site/", "_blank");
  };

  const contactHandler = () => {
    inputRef.current.checked = false;
    window.open("/pages/support", "_blank");
  };

  return (
    <header>
      <div className="wrapper header-container">
        <div className="logo" onClick={clickHandler}>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <label htmlFor="nav-toggle" className="hamburger">
          <img src={Hamburger} alt="" />
        </label>
        <input
          type="checkbox"
          ref={inputRef}
          className="nav-toggle"
          id="nav-toggle"
        />
        <nav>
          <ul>
            {navList.filter((nav) => {
              return (nav.path !== "/login" && nav.path !== "/dashboard") ||
                (nav.path === "/dashboard" && auth?.user !== undefined) ||
                (nav.path === "/login" && auth?.user === undefined)
            }).map((nav) => (
              <li key={nav.text}>
                {nav.path ? (
                  <NavLink
                    activeClassName={styles.active}
                    to={nav.path}
                    onClick={clickHandler}
                  >
                    {nav.text}
                  </NavLink>
                ) : (
                  <div>
                    {/* <button type="button" className={`dropdown-button ${location.pathname === '/transcripts' ? styles.active : ''}`}>{nav.text} <img src={Caret} alt="Caret" /></button>
                                        <ul className="custom-dropdown">
                                            {nav.dropdownItems?.map(item => (
                                                <li key={item.text}>
                                                    <NavLink activeClassName={styles.active} to={item.path} onClick={clickHandler}>{item.text}</NavLink>
                                                </li>
                                            ))}
                                        </ul> */}
                    <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        className={`dropdown-button ${
                          location.pathname === "/transcripts"
                            ? styles.active
                            : ""
                        }`}
                      >
                        {nav.text}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {/* {nav.dropdownItems?.map((item) => ( */}
                        <Dropdown.Item>
                          <NavLink to="/transcripts" onClick={clickHandler}>
                            Transcripts
                          </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={navigateToShop}>
                          Shop
                        </Dropdown.Item>
                        {/* // <NavLink activeClassName={styles.active} className="dropdown-item" to={item.path} onClick={clickHandler}>{item.text}</NavLink> */}
                        {/* ))} */}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                )}
              </li>
            ))}
            { auth?.user !== undefined && (
              <li>
                <NavLink to="" onClick={auth.logout}>
                  Logout
                </NavLink>
              </li>
            )}
            <li>
              <Button variant="primary" type="button" onClick={contactHandler}>
                Contact Us
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
