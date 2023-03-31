import "./MoviesCardList.css";

function MoviesCardList({ children }) {
  return (
    <>
      <ul className="card-list">{children}</ul>
    </>
  );
}

export default MoviesCardList;
