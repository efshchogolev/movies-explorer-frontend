import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__main-text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__container'>
        <p className='footer__text'>&copy;2022</p>
        <ul className='footer__nav-links'>
          <li className='footer__link'>Яндекс.Практикум</li>
          <li className='footer__link'>Github</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;