import Header from '../Header/Header'
import './Profile.css'

function Profile() {
  return (
    <>
      <Header></Header>
      <section className='profile'>
        <div className='profile__container'>
          <h1 className='profile__hello'>Привет, Виталий!</h1>
          <div className='profile__data-container'>
            <div className='profile__name-container'>
              <p className='profile__text-title'>Имя</p>
              <p className='profile__text'>Виталий</p>
            </div>
            <div className='profile__email-container'>
              <p className='profile__text-title profile__text-title_email'>E-mail</p>
              <p className='profile__text profile__text_email'>pochta@yandex.ru</p>
            </div>
          </div>
          <button className='profile__button'>Редактировать</button>
          <button className='profile__button profile__button_exit'>Выйти из аккаунта</button>
        </div>
      </section>
    </>
  )
}

export default Profile