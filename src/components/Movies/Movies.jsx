import ButtonMore from '../ButtonMore/ButtonMore'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCard from '../MoviesCard/MoviesCard'
import './Movies.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Preloader from '../Preloader/Preloader'
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from 'react';

function Movies({
  onSearch,
  moviesList,
  inputValue,
  setInputValue,
  isActiveCheckbox,
  setIsActiveCheckbox,
  handleChangeCheckbox,
  cardListText,
  preloader,
  numberOfMovies,
  // numberOfAddMovies,
  handleDisplayMoreMovies,
  isButtonMoreVisible,
  onLikeCard
}) {
  const currentUser = useContext(CurrentUserContext)

  const handleCountDuration = (duration) => {
    const hours = parseInt((duration / 60))
    const mins = (duration % 60)
    if (hours === 0) {
      return `${mins}м`
    } else if (mins === 0) {
      return `${hours}ч`
    } else {
      return `${hours}ч ${mins}м`
    }
  }

  // const isLiked = card.likes.some((i) => i === currentUser._id);

  return (
    <>
      <Header />
      <SearchForm
        onSearch={onSearch}
        inputValue={inputValue}
        setInputValue={setInputValue}
        isActiveCheckbox={isActiveCheckbox}
        handleChangeCheckbox={handleChangeCheckbox}
      />
      <MoviesCardList >
        <>
          {moviesList?.slice(0, numberOfMovies).map((card) => (
            <MoviesCard
              trailerLink={card.trailerLink}
              card={card}
              key={card.id}
              button={'card__save'}
              onCountDuration={handleCountDuration}
              onLikeCard={onLikeCard}
            // isLiked={isLiked}
            />
          ))}
          <p className={`card-list__text ${moviesList && moviesList?.length && preloader !== 0 ? 'card-list__text_invisible' : ' '}`}>{cardListText}</p>
          {preloader && <Preloader />}
        </>
      </MoviesCardList>
      <ButtonMore isButtonMoreVisible={isButtonMoreVisible} handleDisplayMoreMovies={handleDisplayMoreMovies} />
      <Footer />
    </>
  )
}

export default Movies