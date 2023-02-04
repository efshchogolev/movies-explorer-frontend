import AuthForm from '../AuthForm/AuthForm'
import AuthHello from '../AuthHello/AuthHello'
import './Register.css'

function Register() {
  return (
    <section className='register'>
      <AuthHello helloText='Добро пожаловать!' />
      <AuthForm buttonText='Зарегестрироваться' />
    </section>
  )
}

export default Register