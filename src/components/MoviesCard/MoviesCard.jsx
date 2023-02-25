import './MoviesCard.css'
import cn from 'classnames'
import imagePath from '../../images/movie-image.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";

function MoviesCard({
  active,
  button,
  card,
  onCountDuration,
  onLikeCard,
  trailerLink,
  savedMovies }) {
  const handleLikeCard = () => {
    console.log(card)
    onLikeCard(card)
  }
  let isSaved = savedMovies.some((m) =>
    m.movieId === card.id
  )

  return (
    <li className='card'>
      <div className='card__info'>
        <p className='card__name'>{card.nameRU}</p>
        <p className='card__time'>{onCountDuration(card.duration)}</p>
        <button className={cn(button, isSaved ? 'card__save_active' : '')} onClick={handleLikeCard}></button>
      </div>
      <a href={trailerLink}>
        <img className='card__image' alt="Миниатюрное изображение фильма" src={`https://api.nomoreparties.co${card.image.url}`} />
      </a>
    </li>
  )
}

export default MoviesCard