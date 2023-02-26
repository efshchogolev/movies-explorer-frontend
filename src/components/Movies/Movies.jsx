import ButtonMore from "../ButtonMore/ButtonMore";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

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
  handleDisplayMoreMovies,
  isButtonMoreVisible,
  onLikeCard,
  savedMovies,
  onCountDuration,
}) {
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
      <MoviesCardList>
        <>
          {moviesList?.slice(0, numberOfMovies).map((card) => (
            <MoviesCard
              trailerLink={card.trailerLink}
              card={card}
              key={card.id}
              button={"card__save"}
              onCountDuration={onCountDuration}
              onLikeCard={onLikeCard}
              cardImage={`https://api.nomoreparties.co${card.image.url}`}
              savedMovies={savedMovies}
              isSavedMoviesPage={false}
            />
          ))}
          <p
            className={`card-list__text ${
              moviesList && moviesList?.length && preloader !== 0
                ? "card-list__text_invisible"
                : " "
            }`}
          >
            {cardListText}
          </p>
          {preloader && <Preloader />}
        </>
      </MoviesCardList>
      <ButtonMore
        isButtonMoreVisible={isButtonMoreVisible}
        handleDisplayMoreMovies={handleDisplayMoreMovies}
      />
      <Footer />
    </>
  );
}

export default Movies;
