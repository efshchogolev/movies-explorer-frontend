import "./MoviesCard.css";
import cn from "classnames";

function MoviesCard({
  button,
  card,
  onCountDuration,
  onLikeCard,
  trailerLink,
  savedMovies,
  cardImage,
  isSavedMoviesPage,
  onDeleteMovie,
}) {
  const handleLikeCard = () => {
    // console.log(card)
    onLikeCard(card);
  };

  const handleDeleteCard = () => {
    console.log(card);
    onDeleteMovie(card);
  };

  let isSaved = savedMovies.some((m) => {
    return m.movieId === card.id;
  });

  return (
    <li className="card">
      <div className="card__info">
        <p className="card__name">{card.nameRU}</p>
        <p className="card__time">{onCountDuration(card.duration)}</p>
        {!isSavedMoviesPage ? (
          <button
            className={`card__save ${isSaved ? "card__save_active" : ""}`}
            onClick={handleLikeCard}
          ></button>
        ) : (
          <button className="card__delete" onClick={handleDeleteCard}></button>
        )}
      </div>
      <a href={trailerLink}>
        <img
          className="card__image"
          alt="Миниатюрное изображение фильма"
          src={cardImage}
        />
      </a>
    </li>
  );
}

export default MoviesCard;
