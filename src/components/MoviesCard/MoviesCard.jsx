import './MoviesCard.css'
import cn from 'classnames'
import imagePath from '../../images/movie-image.png'

function MoviesCard({ active }) {
  return (
    <li className='card'>
      <div className='card__info'>
        <p className='card__name'>33 слова о дизайне</p>
        <p className='card__time'>1ч 47м</p>
        <button className={cn('card__save', active ? 'card__save_active' : '')}></button>
      </div>
      <img className='card__image' src={imagePath}></img>
    </li>
  )
}

export default MoviesCard