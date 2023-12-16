import Logo from "../../assets/Logo/Logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoSparklesSharp } from "react-icons/io5";
import { FiChevronsDown } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";
import { GiWhiteBook, GiOpenBook } from "react-icons/gi";
import "./Navbar.css";
import { useEffect, useState } from "react";
import { useModal } from "../SignUpModal/Modal";
import { useAuth } from "../../utils/Auth";
import ProfileModal from "../ProfileModal/ProfileModal";

const Navbar = () => {
  // State for mobile navigation and profile modal
  const [mobileNav, setMobileNav] = useState(false);
  const [profileModal, setProfileModal] = useState(false);

  // Function to handle mobile navigation click
  const navMenuClick = () => {
    setMobileNav((prevState) => !prevState);
    setProfileModal(false);
  };

  // Get the current location using useLocation hook
  const location = useLocation();

  // Modal and authentication hooks
  const { openModal } = useModal();
  const auth = useAuth();

  return (
    <>
      {/* Navigation bar */}
      <nav>
        {/* Sage logo */}
        <img src={Logo} alt="Sage Logo" className="sage-logo" />

        {/* Navigation links */}
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
        </ul>

        {/* Conditional rendering for user profile or get started button */}
        {auth.user && location.pathname === '/login' ? (
          <div
            className="sage__user-profile-container"
            onClick={() => {
              setProfileModal((prevState) => !prevState);
              setMobileNav(false);
            }}
          >
            <span className="sage__user-username">
              {auth.user?.loginUsername}
            </span>
            <CgProfile className="profile-icons" size={30} color="#000000"/>
            <FiChevronsDown size={20} color="#000000" className="chevron-icon"/>

            {/* Profile Modal slides in when the profile modal is true */}
            {profileModal && <ProfileModal />}
          </div>
        ) : (
          <button className="sage__get-started-button" onClick={openModal}>
            Get Started
          </button>
        )}

        {/* Mobile Navigation */}
        {mobileNav && (
          <div className="sage__mobile-navigation">
            {/* Sparkles icon */}
            <IoSparklesSharp size={20} color="#FFFFFF" />

            {/* Mobile navigation links */}
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

            {/* Conditional rendering for user profile or get started button in mobile view */}
            {auth.user ? (
              <div className="sage__user-profile-container">
                <Link className="sage__user-username">Profile</Link>
              </div>
            ) : (
              <button className="sage__get-started-button" onClick={openModal}>
                Get Started
              </button>
            )}

            {/* Social media icons in mobile view */}
            <div className="sage__mobile-nav-logo-contianer">
              <IoLogoTwitter color="#FFFFFF" size={20} />
              <IoLogoInstagram color="#FFFFFF" size={20} />
              <IoLogoLinkedin color="#FFFFFF" size={20} />
            </div>
          </div>
        )}

        {/* Mobile Navigation icon */}
        <div className="sage__mobile-nav-link-click-icon">
          {mobileNav ? (
            <GiOpenBook onClick={navMenuClick} size={30} />
          ) : (
            <GiWhiteBook onClick={navMenuClick} size={30} />
          )}
        </div>
      </nav>
      {/* Horizontal rule */}
      {/* <hr /> */}
    </>
  );
};

export default Navbar;