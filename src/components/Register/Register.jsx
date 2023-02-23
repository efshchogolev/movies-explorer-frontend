
import AuthForm from '../AuthForm/AuthForm'
import AuthHello from '../AuthHello/AuthHello'
import './Register.css'

function Register({ onRegister, errorMessage }) {


  return (
    <section className='register'>
      <AuthHello helloText='Добро пожаловать!' />
      <AuthForm buttonText='Зарегестрироваться' onRegister={onRegister} errorMessage={errorMessage} />
    </section>
  )
}

export default Register