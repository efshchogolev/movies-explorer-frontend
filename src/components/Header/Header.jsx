import "./Header.css";
import logoPath from "../../images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import Menu from "../Menu/Menu";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import {
  PATH_HOME,
  PATH_MOVIES,
  PATH_PROFILE,
  PATH_SAVED_MOVIES,
} from "../../utils/constants";

function Header({ onOpenMenu, isMenuOpen }) {
  const location = useLocation();
  return (
    <header className="header">
      <div className="header__container">
        <Link to={PATH_HOME}>
          <img src={logoPath} alt="логотип" className="header__logo" />
        </Link>
        <Menu>
          <div className="menu__films-container">
            <Link
              className={`menu__link menu__link_films ${
                location.pathname === PATH_MOVIES
                  ? "menu__link_films_active"
                  : ""
              }`}
              to={PATH_MOVIES}
            >
              Фильмы
            </Link>
            <Link
              className={`menu__link menu__link_films ${
                location.pathname === PATH_SAVED_MOVIES
                  ? "menu__link_films_active"
                  : ""
              }`}
              to={PATH_SAVED_MOVIES}
            >
              Сохранённые фильмы
            </Link>
          </div>
          <div className="menu__account-container">
            <Link className="menu__link menu__link_account" to={PATH_PROFILE}>
              Аккаунт
            </Link>
            <Link to={PATH_PROFILE} className="menu__link menu__link_avatar">
              <div className="menu__avatar-container"></div>
            </Link>
          </div>
        </Menu>

        <BurgerMenu onOpenMenu={onOpenMenu} isMenuOpen={isMenuOpen} />
      </div>
    </header>
  );
}

export default Header;
