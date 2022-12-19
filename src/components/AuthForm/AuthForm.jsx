import { Link } from 'react-router-dom'
import './AuthForm.css'

function AuthForm({ children, buttonText }) {
  return (
    <form className='auth-form'>
      {children}
      <button type='submit' className='auth-form__button'>{buttonText}</button>
      <p className='auth-form__text'>
        Уже зарегистрированы?
        <Link className="auth-form__link" to="../signin">
          Войти
        </Link>
      </p>
    </form>
  )
}

export default AuthForm