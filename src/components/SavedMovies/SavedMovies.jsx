import ButtonMore from '../ButtonMore/ButtonMore'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCard from '../MoviesCard/MoviesCard'
import './SavedMovies.css'

function SavedMovies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList >
        <MoviesCard button={'card__delete'} />
        <MoviesCard button={'card__delete'} />
        <MoviesCard button={'card__delete'} />
      </MoviesCardList>
      <ButtonMore visible={false} />
    </>
  )
}

export default SavedMovies