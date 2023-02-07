import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <nav className="navigation">
      <Link className='navigation__link' to='/signup'>Регистрация</Link>
      <Link to='signin'><button className='navigation__button'>Войти</button></Link>
    </nav>
  )
}

export default Navigation