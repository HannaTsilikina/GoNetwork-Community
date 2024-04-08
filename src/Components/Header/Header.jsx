import plane from "../../assets/images/vectors/plane.svg";
import line from "../../assets/images/vectors/line.svg";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link>
        <div className="header__logo">
          <span className="header-logo__text">GoNetwork</span>
          <div className="header-logo__image">
            <img className="header-logo__line" src={line} alt="logo-image" />
            <img className="header-logo__plane" src={plane} alt="logo-image" />
          </div>
        </div>
      </Link>
      <nav className="header__nav">
        <NavLink>
          <div className="header-nav__item >">
            <span className="header-nav__text">Компании</span>
            <div className="header-nav__background"> </div>
          </div>
        </NavLink>
        <NavLink>
          <div className="header-nav__item >">
            <span className="header-nav__text">Темы</span>
            <div className="header-nav__background"> </div>
          </div>
        </NavLink>
        <NavLink>
          <div className="header-nav__item >">
            <span className="header-nav__text">Коммуникации</span>
            <div className="header-nav__background"> </div>
          </div>
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
