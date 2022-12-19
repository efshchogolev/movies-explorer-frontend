import './AuthHello.css'
import logoPath from '../../images/logo.svg'

function AuthHello({ helloText }) {
  return (
    <div className='auth-hello'>
      <img src={logoPath} alt="логотип" className='auth-hello__logo' />
      <p className='auth-hello__text'>{helloText}</p>
    </div >
  )
}

export default AuthHello