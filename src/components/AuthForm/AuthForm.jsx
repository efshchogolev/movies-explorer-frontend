import { Link } from 'react-router-dom'
import './AuthForm.css'

function AuthForm({ buttonText, loginPage }) {
  return (
    <form className='auth-form'>
      {loginPage ? <>
        <label htmlFor='name' className='auth-form__label'>
          E-mail
          <input id='name' type='text' className='auth-form__input' placeholder='Ваш e-mail'></input>
        </label>
        <label htmlFor='password' className='auth-form__label'>
          Пароль
          <input id='password' type='password' className='auth-form__input auth-form__input_password' placeholder='Ваш пароль'></input>
          <span className="auth-form__error-message auth-form__error-message_invisible">Что-то пошло не так...</span>
        </label>
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
          <label htmlFor='name' className='auth-form__label'>
            Имя
            <input id='name' type='text' className='auth-form__input' placeholder='Ваше имя'></input>
          </label>
          <label htmlFor='email' className='auth-form__label'>
            E-mail
            <input id='email' type='text' className='auth-form__input' placeholder='Ваш e-mail'></input>
          </label>
          <label htmlFor='password' className='auth-form__label'>
            Пароль
            <input id='password' type='password' className='auth-form__input auth-form__input_password' placeholder='Ваш пароль'></input>
            <span className="auth-form__error-message auth-form__error-message_invisible">Что-то пошло не так...</span>
          </label>
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