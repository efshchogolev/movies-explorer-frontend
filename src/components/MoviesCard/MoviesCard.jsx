import "./MoviesCard.css";

function MoviesCard({
  card,
  onCountDuration,
  onLikeCard,
  trailerLink,
  cardImage,
  isSavedMoviesPage,
  onDeleteMovie,
}) {
  const handleLikeCard = () => {
    onLikeCard(card);
  };

  const handleDeleteCard = () => {
    onDeleteMovie(card);
  };

  let isSaved = JSON.parse(localStorage.getItem("savedMovies")).some((m) => {
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
      <a href={trailerLink} target="_blank" rel="noreferrer">
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
