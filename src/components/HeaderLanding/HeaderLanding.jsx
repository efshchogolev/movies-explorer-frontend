import './HeaderLanding.css'
import logoPath from '../../images/logo.svg'
import { Link } from "react-router-dom";

function HeaderLanding({ children }) {
  return (
    <header className='landing-header'>
      <div className='landing-header__container'>
        <Link to='/'>
          <img src={logoPath} alt="логотип" className='landing-header__logo' />
        </Link>
        {children}
      </div>
    </header>
  )
}

export default HeaderLanding;