
import { Link } from "react-router-dom";
import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Navigation from "../Navigation/Navigation";
import Portfolio from "../Portfolio/Portfolio";
import Promo from "../Promo/Promo";
import Menu from '../Menu/Menu'
import Techs from "../Techs/Techs";
import HeaderLanding from '../HeaderLanding/HeaderLanding';
import Footer from '../Footer/Footer'
import BurgerMenu from "../BurgerMenu/BurgerMenu";


function Main({ isLoggedIn }) {
  return (
    <>
      {isLoggedIn ?
        <>
          <HeaderLanding>
            <Menu>
              <div className='menu__films-container'>
                <Link className='menu__link menu__link_films_bold menu__link_films' to='/movies'>Фильмы</Link>
                <Link className='menu__link menu__link_films' to='/saved-movies'>Сохранённые фильмы</Link>
              </div>
              <div className='menu__account-container'>
                <Link className='menu__link menu__link_account' to='/profile'>Аккаунт</Link>
                <Link to='/profile' className='menu__link menu__link_avatar'><div className='menu__avatar-container'></div></Link>
              </div>
            </Menu>
          </HeaderLanding>
          <BurgerMenu />
        </>
        :
        <HeaderLanding><Navigation /></HeaderLanding>}
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>

  )
}

export default Main;