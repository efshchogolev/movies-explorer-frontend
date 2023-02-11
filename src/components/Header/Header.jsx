import './Header.css'
import logoPath from '../../images/logo.svg'
import { Link } from "react-router-dom";
import Menu from '../Menu/Menu'
import BurgerMenu from '../BurgerMenu/BurgerMenu';


function Header() {

  return (
    <header className='header'>
      <div className='header__container'>
        <Link to='/' >
          <img src={logoPath} alt="логотип" className='header__logo' />
        </Link>
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

        <BurgerMenu />
      </div>
    </header>
  )
}

export default Header;