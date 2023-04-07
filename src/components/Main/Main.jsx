import { Link } from "react-router-dom";
import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Navigation from "../Navigation/Navigation";
import Portfolio from "../Portfolio/Portfolio";
import Promo from "../Promo/Promo";
import Menu from "../Menu/Menu";
import Techs from "../Techs/Techs";
import HeaderLanding from "../HeaderLanding/HeaderLanding";
import Footer from "../Footer/Footer";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import {
  PATH_MOVIES,
  PATH_PROFILE,
  PATH_SAVED_MOVIES,
} from "../../utils/constants";

function Main({ isLoggedIn, onOpenMenu, isMenuOpen }) {
  return (
    <>
      {isLoggedIn ? (
        <>
          <HeaderLanding>
            <BurgerMenu onOpenMenu={onOpenMenu} isMenuOpen={isMenuOpen} />
            <Menu>
              <div className="menu__films-container">
                <Link className="menu__link menu__link_films" to={PATH_MOVIES}>
                  Фильмы
                </Link>
                <Link
                  className="menu__link menu__link_films"
                  to={PATH_SAVED_MOVIES}
                >
                  Сохранённые фильмы
                </Link>
              </div>
              <div className="menu__account-container">
                <Link
                  className="menu__link menu__link_account"
                  to={PATH_PROFILE}
                >
                  Аккаунт
                </Link>
                <Link
                  to={PATH_PROFILE}
                  className="menu__link menu__link_avatar"
                >
                  <div className="menu__avatar-container"></div>
                </Link>
              </div>
            </Menu>
          </HeaderLanding>
        </>
      ) : (
        <HeaderLanding>
          <Navigation />
        </HeaderLanding>
      )}
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
