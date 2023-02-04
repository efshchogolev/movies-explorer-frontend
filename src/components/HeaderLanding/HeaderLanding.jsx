import './HeaderLanding.css'
import logoPath from '../../images/logo.svg'
import { Link } from "react-router-dom";

function HeaderLanding() {
  return (
    <header className='landing-header'>
      <Link to='/'>
        <img src={logoPath} alt="логотип" className='landing-header__logo' />
      </Link>
      <div className='landing-header__auth-container'>
        <Link className='landing-header__link' to='/signup'>Регистрация</Link>
        <Link to='signin'><button className='landing-header__button'>Войти</button></Link>
      </div>
    </header>
  )
}

export default HeaderLanding;