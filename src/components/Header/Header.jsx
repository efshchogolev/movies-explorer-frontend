import './Header.css'
import logoPath from '../../images/logo.svg'
import { Link, Routes, Route, useLocation } from "react-router-dom";
const cn = require('classnames');

function Header() {
  const location = useLocation();
  return (
    <header className='header'>
      <div className='header__films-container'>
        <img src={logoPath} alt="логотип" className='header__logo' />
        <Link href='#' className={cn('header__link', 'header__link_films_bold', 'header__link_films')} to='/'>Фильмы</Link>
        <Link href='#' className={cn('header__link', 'header__link_films')} to='/signup'>Сохранённые фильмы</Link>
      </div>
      <div className='header__account-container'>
        <Link href='#' className={cn('header__link', 'header__link_account')} to='/'>Аккаунт</Link>
        <div className='header__avatar-container'></div>
      </div>
    </header>
  )
}

export default Header;