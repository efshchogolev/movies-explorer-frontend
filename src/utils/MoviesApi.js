class MoviesApi {
  constructor(moviesUrl) {
    this._moviesUrl = moviesUrl;
  }


  getApiMovies() {
    return fetch(`${this._moviesUrl}/movies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    )
  }




}

const moviesApi = new MoviesApi(
  // "https://api.nomoreparties.co/beatfilm-movies"
  // "https://api.mexplorersh.nomoredomains.club"
  "http://localhost:3001"
);

export default moviesApi;
