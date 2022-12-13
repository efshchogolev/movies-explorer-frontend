import ButtonMore from '../ButtonMore/ButtonMore'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'
import './Movies.css'

function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
      <ButtonMore />
    </>
  )
}

export default Movies