import AuthForm from '../AuthForm/AuthForm'
import AuthHello from '../AuthHello/AuthHello'
import Preloader from '../Preloader/Preloader'
import './Login.css'

function Login() {
  return (
    <section className='login'>
      <AuthHello helloText='Рады видеть!' />
      <AuthForm buttonText='Войти' loginPage={true} />
    </section>
  )
}

export default Login