import './AboutMe.css'
import studentPath from '../../images/student.png'

function AboutMe() {
  return (
    <section className='about'>
      <div className='about__container'>
        <div className='about__title-container'>
          <h2 className='about__title'>
            Cтудент
          </h2>
        </div>
        <div className='about__student-container'>
          <div className='about__text-container'>
            <h3 className='about__name'>Виталий</h3>
            <p className='about__profession'>Фронтенд-разработчик, 30 лет</p>
            <p className='about__text'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С
              2015 года работал в компании «СКБ Контур». После того, как прошёл курс по
              веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <p className='about__link'>Github</p>
          </div>
          <img src={studentPath} alt='Фотография студента' className='about__photo' />
        </div>
      </div>
    </section>
  )
}

export default AboutMe