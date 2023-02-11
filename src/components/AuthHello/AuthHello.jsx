import './AuthHello.css'
import logoPath from '../../images/logo.svg'
import { Link } from 'react-router-dom'

function AuthHello({ helloText }) {
  return (
    <div className='auth-hello'>
      <Link to='/' className='auth-hello__link'>
        <img src={logoPath} alt="логотип" className='auth-hello__logo' />
      </Link>
      <h1 className='auth-hello__text'>{helloText}</h1>
    </div >
  )
}

export default AuthHello