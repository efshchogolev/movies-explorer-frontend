import AuthForm from '../AuthForm/AuthForm'
import AuthHello from '../AuthHello/AuthHello'
import './Register.css'

function Register() {
  return (
    <section className='register'>
      <AuthHello helloText='Добро пожаловать!' />
      <AuthForm buttonText='Зарегестрироваться'>
        <label htmlFor='name' className='auth-form__label'>
          Имя
          <input name='name' type='text' className='auth-form__input' placeholder='Ваше имя'></input>
        </label>
        <label htmlFor='name' className='auth-form__label'>
          E-mail
          <input name='name' type='text' className='auth-form__input' placeholder='Ваш e-mail'></input>
        </label>
        <label htmlFor='name' className='auth-form__label'>
          Пароль
          <input name='name' type='password' className='auth-form__input auth-form__input_password' placeholder='Ваш пароль'></input>
          <span className="auth-form__error-message">Что-то пошло не так...</span>
        </label>
      </AuthForm>
    </section>
  )
}

export default Register