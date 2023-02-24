import AuthForm from '../AuthForm/AuthForm'
import AuthHello from '../AuthHello/AuthHello'
import './Login.css'

function Login({ onLogin, errorMessage }) {
  return (
    <>
      <section className='login'>
        <AuthHello helloText='Рады видеть!' />
        <AuthForm buttonText='Войти' loginPage={true} onLogin={onLogin} errorMessage={errorMessage} />
      </section>
    </>
  )
}

export default Login