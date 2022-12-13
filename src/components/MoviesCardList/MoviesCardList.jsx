import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'


function MoviesCardList() {
  return (
    <section className='card-list'>
      <MoviesCard />
      <MoviesCard />
      <MoviesCard active={true} />
      <MoviesCard />
      <MoviesCard active={true} />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard active={true} />
      <MoviesCard />
      <MoviesCard />
    </section>
  )
}

export default MoviesCardList