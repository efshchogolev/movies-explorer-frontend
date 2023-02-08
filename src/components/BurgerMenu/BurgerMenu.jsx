
import { Link } from 'react-router-dom'
import './BurgerMenu.css'
import { useState } from 'react';

function BurgerMenu() {
  const [isMenuOpen, setMenuOpen] = useState(false)

  function handleToggleMenu() {
    setMenuOpen(!isMenuOpen)
    console.log(isMenuOpen)
  }
  return (
    <>
      <button className={`burger-menu__button ${isMenuOpen ? 'burger-menu__button_close' : ''}`} onClick={handleToggleMenu}></button>
      <div className={`burger-menu__overlay ${isMenuOpen ? 'burger-menu__overlay_open' : ''}`}>
        <nav className='burger-menu'>
          <ul className='burger-menu__nav-links'>
            <li className='burger-menu__list-item'><Link className='burger-menu__nav-link' to='/'>Главная</Link></li>
            <li className='burger-menu__list-item '><Link className='burger-menu__nav-link burger-menu__nav-link_active' to='/movies'>Фильмы</Link></li>
            <li className='burger-menu__list-item'><Link className='burger-menu__nav-link' to='/saved-movies'>Сохранённые фильмы</Link></li>
          </ul>
          <div className='burger-menu__account-container'>
            <Link className='burger-menu__nav-link burger-menu__nav-link_account' to='/profile'>Аккаунт</Link>
            <Link to='/profile' className='burger-menu__nav-link burger-menu__nav-link_avatar'><div className='burger-menu__avatar-container'></div></Link>
          </div>
        </nav>


      </div>
    </>
  )
}

export default BurgerMenu