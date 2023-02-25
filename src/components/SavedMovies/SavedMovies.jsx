import ButtonMore from '../ButtonMore/ButtonMore'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCard from '../MoviesCard/MoviesCard'
import './SavedMovies.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function SavedMovies({ onSearch, savedMovies, onCountDuration, onDeleteMovie }) {
  return (
    <>
      <Header />
      <SearchForm onSearch={onSearch} />
      <MoviesCardList >
        {savedMovies?.map((card) => (
          <MoviesCard
            trailerLink={card.trailerLink}
            card={card}
            key={card.movieId}
            button={'card__save'}
            onCountDuration={onCountDuration}
            cardImage={card.thumbnail}
            // onLikeCard={onLikeCard}
            savedMovies={savedMovies}
            isSavedMoviesPage={true}
            onDeleteMovie={onDeleteMovie}
          />
        ))}
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