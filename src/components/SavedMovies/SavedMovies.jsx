import ButtonMore from "../ButtonMore/ButtonMore";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./SavedMovies.css";
import Footer from "../Footer/Footer";

function SavedMovies({
  onSearch,
  savedMovies,
  onCountDuration,
  onDeleteMovie,
  savedMoviesCheckbox,
  onChangeSavedCheckbox,
}) {
  return (
    <>
      <SearchForm
        onSearch={onSearch}
        isActiveCheckbox={savedMoviesCheckbox}
        handleChangeCheckbox={onChangeSavedCheckbox}
      />
      <MoviesCardList>
        {savedMovies?.map((card) => (
          <MoviesCard
            trailerLink={card.trailerLink}
            card={card}
            key={card.movieId}
            onCountDuration={onCountDuration}
            cardImage={card.thumbnail}
            savedMovies={savedMovies}
            isSavedMoviesPage={true}
            onDeleteMovie={onDeleteMovie}
          />
        ))}
      </MoviesCardList>
      <ButtonMore invisible={false} />
      <Footer />
    </>
  );
}

export default SavedMovies;
