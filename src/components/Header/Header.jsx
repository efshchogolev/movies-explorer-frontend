import './Header.css'
import logoPath from '../../images/logo.svg'
import { Link } from "react-router-dom";
import Menu from '../Menu/Menu'

function Header({ children }) {
  return (
    <header className='header'>
      <div className='header__container'>
        <Link to='/' >
          <img src={logoPath} alt="логотип" className='header__logo' />
        </Link>
        {/* {children} */}
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
        {/* <div className='header__films-container'>
          <Link className='header__link header__link_films_bold header__link_films' to='/movies'>Фильмы</Link>
          <Link className='header__link header__link_films' to='/saved-movies'>Сохранённые фильмы</Link>
        </div>
        <div className='header__account-container'>
          <Link className='header__link header__link_account' to='/profile'>Аккаунт</Link>
          <Link to='/profile' className='header__link header__link_avatar'><div className='header__avatar-container'></div></Link>
        </div> */}
      </div>
    </header>
  )
}

export default Header;