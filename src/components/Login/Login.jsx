import AuthForm from '../AuthForm/AuthForm'
import AuthHello from '../AuthHello/AuthHello'
import './Login.css'

function Login() {
  return (
    <section className='login'>
      <AuthHello helloText='Рады видеть!' />
      <AuthForm buttonText='Войти' loginPage={true}>
        <label htmlFor='name' className='auth-form__label'>
          E-mail
          <input name='name' type='text' className='auth-form__input' placeholder='Ваш e-mail'></input>
        </label>
        <label htmlFor='name' className='auth-form__label'>
          Пароль
          <input name='name' type='password' className='auth-form__input auth-form__input_password' placeholder='Ваш пароль'></input>
          <span className="auth-form__error-message auth-form__error-message_invisible">Что-то пошло не так...</span>
        </label>
      </AuthForm>
    </section>
  )
}

export default Login