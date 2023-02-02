import { Link } from 'react-router-dom'
import './AuthForm.css'

function AuthForm({ children, buttonText, loginPage }) {
  return (
    <form className='auth-form'>
      {children}
      {loginPage ? <>
        <button type='submit' className='auth-form__button auth-form__button_login'>{buttonText}</button>
        <p className='auth-form__text'>
          Ещё не зарегестрированы?
          <Link className="auth-form__link" to="../signup">
            Регистрация
          </Link>
        </p>
      </>
        :
        <>
          <button type='submit' className='auth-form__button'>{buttonText}</button>
          <p className='auth-form__text'>
            Уже зарегистрированы?
            <Link className="auth-form__link" to="../signin">
              Войти
            </Link>
          </p>
        </>
      }
    </form>
  )
}

export default AuthForm