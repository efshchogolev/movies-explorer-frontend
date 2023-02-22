import ButtonMore from '../ButtonMore/ButtonMore'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCard from '../MoviesCard/MoviesCard'
import './SavedMovies.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Preloader from '../Preloader/Preloader'

function SavedMovies({ onSearch }) {
  return (
    <>
      <Header />
      <SearchForm onSearch={onSearch} />
      <MoviesCardList >
        {/* <MoviesCard button={'card__delete'} />
        <MoviesCard button={'card__delete'} />
        <MoviesCard button={'card__delete'} /> */}
      </MoviesCardList>
      <ButtonMore invisible={false} />
      <Footer />
    </>
  )
}

export default SavedMovies