import './Header.css'
import logoPath from '../../images/logo.svg'
import { Link, Routes, Route, useLocation } from "react-router-dom";
const cn = require('classnames');

function Header() {
  const location = useLocation();
  return (
    <header className={cn('header', location.pathname !== '/' && ('header_black'))}>
      <Routes>
        <Route path='/' element={
          <>
            <img src={logoPath} alt="логотип" className='header__logo' />
            <div className='header__auth-container'>
              <Link className='header__link' to='/signup'>Регистрация</Link>
              <Link to='signin'><button className='header__button'>Войти</button></Link>
            </div>
          </>
        } />
        <Route path='/movies' element={
          <>
            <div className='header__films-container'>
              <img src={logoPath} alt="логотип" className='header__logo' />
              <Link href='#' className={cn('header__link', 'header__link_films_bold', 'header__link_films')} to='/'>Фильмы</Link>
              <Link href='#' className={cn('header__link', 'header__link_films')} to='/signup'>Сохранённые фильмы</Link>
            </div>
            <div className='header__account-container'>
              <Link href='#' className={cn('header__link', 'header__link_account')} to='/'>Аккаунт</Link>
              <div className='header__avatar-container'></div>
            </div>
          </>
        } />
        <Route path='saved-movies' />
      </Routes>

    </header>
  )
}

export default Header;