import { Link, useLocation } from "react-router-dom";
import "./BurgerMenu.css";
import {
  PATH_HOME,
  PATH_MOVIES,
  PATH_PROFILE,
  PATH_SAVED_MOVIES,
} from "../../utils/constants";

function BurgerMenu({ onOpenMenu, isMenuOpen }) {
  const location = useLocation();
  return (
    <div className="burger-menu">
      <button className={`burger-menu__button`} onClick={onOpenMenu}></button>
      <div
        className={`burger-menu__overlay ${
          isMenuOpen ? "burger-menu__overlay_open" : ""
        }`}
      >
        <nav className="burger-menu__nav">
          <button
            className={`burger-menu__button burger-menu__button_close`}
            onClick={onOpenMenu}
          ></button>
          <ul className="burger-menu__nav-links">
            <li className="burger-menu__list-item">
              <Link
                className={`burger-menu__nav-link ${
                  location.pathname === PATH_HOME
                    ? "burger-menu__nav-link_active"
                    : ""
                }`}
                to={PATH_HOME}
              >
                Главная
              </Link>
            </li>
            <li className="burger-menu__list-item ">
              <Link
                className={`burger-menu__nav-link ${
                  location.pathname === PATH_MOVIES
                    ? "burger-menu__nav-link_active"
                    : ""
                }`}
                to={PATH_MOVIES}
              >
                Фильмы
              </Link>
            </li>
            <li className="burger-menu__list-item">
              <Link
                className={`burger-menu__nav-link ${
                  location.pathname === PATH_SAVED_MOVIES
                    ? "burger-menu__nav-link_active"
                    : ""
                }`}
                to={PATH_SAVED_MOVIES}
              >
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
          <div className="burger-menu__account-container">
            <Link
              className="burger-menu__nav-link burger-menu__nav-link_account"
              to={PATH_PROFILE}
            >
              Аккаунт
            </Link>
            <Link
              to={PATH_PROFILE}
              className="burger-menu__nav-link burger-menu__nav-link_avatar"
            >
              <div className="burger-menu__avatar-container"></div>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default BurgerMenu;
