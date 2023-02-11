import ButtonMore from '../ButtonMore/ButtonMore'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCard from '../MoviesCard/MoviesCard'
import './SavedMovies.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function SavedMovies() {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList >
        <MoviesCard button={'card__delete'} />
        <MoviesCard button={'card__delete'} />
        <MoviesCard button={'card__delete'} />
      </MoviesCardList>
      <ButtonMore visible={false} />
      <Footer />
    </>
  )
}

export default SavedMovies