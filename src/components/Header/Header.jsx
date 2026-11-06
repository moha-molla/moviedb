import { useEffect, useState } from "react";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router";

import { Search, Bell, User, ChevronDown } from "lucide-react";

import Styles from "./Header.module.css";
const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // for buler
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  return (
    <header className={`${Styles.header} ${isScrolled ? Styles.scrolled : ""}`}>
      <div className={Styles.container}>
        {/* logo */}
        <img className={Styles.logo} src={logo} alt="" />
        {/* navigation */}
        <nav className={Styles.nav}>
          <Link className={Styles.navLink} to="">
            Tv Show
          </Link>
          <Link className={Styles.navLink} to="">
            Home
          </Link>
          <Link className={Styles.navLink} to="">
            Movies
          </Link>
          <Link className={Styles.navLink} to="">
            New & Popular
          </Link>
          <Link className={Styles.navLink} to="">
            My List
          </Link>
          <Link className={Styles.navLink} to="">
            Browse by Language
          </Link>
        </nav>

        {/* right side section */}

        <div className={Styles.rightSection}>
          {/* search */}
          <div className={Styles.searchContainer}>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={Styles.searchButton}
            >
              <Search size={20} />
            </button>

            {isSearchOpen && (
              <input
                type="text"
                placeholder="movie title"
                className={Styles.searchInput}
              />
            )}
          </div>

          {/* notification */}
          <button className={Styles.iconButton}>
            {/* notification icon */}
            <Bell size={20} />
            <span className={Styles.notificationBadge}>4</span>
          </button>

          {/* profile */}
          <div className={Styles.profileContainer}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className={Styles.profileButton}
            >
              {/* user icon */}
              <div className={Styles.profileAvatar}>
                <User size={20} />
              </div>

              <ChevronDown size={20} />
              {/* dropdown icon */}
            </button>

            {isProfileOpen && (
              <div className={Styles.profileMenu}>
                <Link className={Styles.profileMenuItem}>Account</Link>
                <Link className={Styles.profileMenuItem}>Help Center</Link>
                <hr className={Styles.profileMenuDivider} />
                <button className={Styles.profileMenuItem}>Sign Out</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
