import './MoviesCard.css'
import cn from 'classnames'
import imagePath from '../../images/movie-image.png'

function MoviesCard({ active, button, card }) {
  return (
    <li className='card'>
      <div className='card__info'>
        <p className='card__name'>{card.nameRU}</p>
        <p className='card__time'>{card.duration}</p>
        <button className={cn(button, active ? 'card__save_active' : '')}></button>
      </div>
      <img className='card__image' alt="Миниатюрное изображение фильма" src={card.thumbnail} />
    </li>
  )
}

export default MoviesCard