import ButtonMore from '../ButtonMore/ButtonMore'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCard from '../MoviesCard/MoviesCard'
import './Movies.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Movies() {
  return (
    <>
      <Header />
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
      <ButtonMore invisible={true} />
      <Footer />
    </>
  )
}

export default Movies