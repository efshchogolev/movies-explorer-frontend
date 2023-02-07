import './HeaderLanding.css'
import logoPath from '../../images/logo.svg'
import { Link } from "react-router-dom";
import Navigation from '../Navigation/Navigation';

function HeaderLanding({ children }) {
  return (
    <header className='landing-header'>
      <div className='landing-header__container'>
        <Link to='/'>
          <img src={logoPath} alt="логотип" className='landing-header__logo' />
        </Link>
        {children}
        {/* <div className='landing-header__auth-container'>
          <Link className='landing-header__link' to='/signup'>Регистрация</Link>
          <Link to='signin'><button className='landing-header__button'>Войти</button></Link>
        </div> */}
        {/* <Navigation /> */}
      </div>
    </header>
  )
}

export default HeaderLanding;