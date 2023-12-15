import Logo from "../../assets/Logo/Logo.png";
import { Link } from "react-router-dom";
import { IoSparklesSharp } from "react-icons/io5";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";
import { GiWhiteBook, GiOpenBook } from "react-icons/gi";
import "./Navbar.css";
import { useState } from "react";
import { useModal } from "../SignUpModal/Modal";
import { useAuth } from "../../utils/Auth";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const navMenuClick = () => {
    setMobileNav((prevState) => !prevState);
  };

  const { openModal } = useModal();
  const auth = useAuth();

  return (
    <>
      <nav>
        <img src={Logo} alt="Sage Logo" className="sage-logo" />

        <ul className="sage__nav-links-container">
          <li className="sage__nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="sage__nav-link">
            <Link to="/books">Books</Link>
          </li>
          <li className="sage__nav-link">
            <Link>Author</Link>
          </li>

          {/* {auth.user && <li>Caleb</li>} */}
        </ul>

        {auth.user ? (
          <button>Caleb</button>
        ) : (
          <button className="sage__get-started-button" onClick={openModal}>
            Get Started
          </button>
        )}

        {/* Mobile Navigation */}
        {mobileNav && (
          <div className="sage__mobile-navigation">
            <IoSparklesSharp size={20} color="#FFFFFF" />
            <ul className="sage__mobile-nav-links-container">
              <li className="sage__mobile-nav-link">
                <Link to="/">Home</Link>
              </li>
              <li className="sage__mobile-nav-link">
                <Link to="/books">Books</Link>
              </li>
              <li className="sage__mobile-nav-link">
                <Link>Author</Link>
              </li>
            </ul>

            <button
              className="sage__mobile-get-started-button"
              onClick={openModal}
            >
              Get Started
            </button>
            <div className="sage__mobile-nav-logo-contianer">
              <IoLogoTwitter color="#FFFFFF" size={20} />
              <IoLogoInstagram color="#FFFFFF" size={20} />
              <IoLogoLinkedin color="#FFFFFF" size={20} />
            </div>
          </div>
        )}

        <div className="sage__mobile-nav-link-click-icon">
          {mobileNav ? (
            <GiOpenBook onClick={navMenuClick} size={30} />
          ) : (
            <GiWhiteBook onClick={navMenuClick} size={30} />
          )}
        </div>
      </nav>
      {/* <hr /> */}
    </>
  );
};

export default Navbar;
