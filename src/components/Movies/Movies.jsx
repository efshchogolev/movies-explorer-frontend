import ButtonMore from '../ButtonMore/ButtonMore'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCard from '../MoviesCard/MoviesCard'
import './Movies.css'

function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList >
        <MoviesCard button={'card__save'} />
        <MoviesCard button={'card__save'} />
        <MoviesCard button={'card__save'} active={true} />
        <MoviesCard button={'card__save'} />
        <MoviesCard button={'card__save'} active={true} />
        <MoviesCard button={'card__save'} />
        <MoviesCard button={'card__save'} />
        <MoviesCard button={'card__save'} />
        <MoviesCard button={'card__save'} />
        <MoviesCard button={'card__save'} active={true} />
        <MoviesCard button={'card__save'} />
        <MoviesCard button={'card__save'} />
      </MoviesCardList>
      <ButtonMore visible={true} />
    </>
  )
}

export default Movies