import './Header.css'
import logoPath from '../../images/logo.svg'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className='header'>
      <div className='header__films-container'>
        <Link to='/' >
          <img src={logoPath} alt="логотип" className='header__logo' />
        </Link>
        <Link className='header__link header__link_films_bold header__link_films' to='/movies'>Фильмы</Link>
        <Link className='header__link header__link_films' to='/saved-movies'>Сохранённые фильмы</Link>
      </div>
      <div className='header__account-container'>
        <Link className='header__link header__link_account' to='/profile'>Аккаунт</Link>
        <Link to='/profile' className='header__link header__link_avatar'><div className='header__avatar-container'></div></Link>
      </div>
    </header>
  )
}

export default Header;