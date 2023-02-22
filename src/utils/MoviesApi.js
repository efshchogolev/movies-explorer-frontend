class MoviesApi {
  constructor(moviesUrl) {
    this._moviesUrl = moviesUrl;
  }

  // _getRequest({ url, method = "POST", data }) {
  //   return fetch(`${this._baseUrl}${url}`, {
  //     method,
  //     headers: {
  //       "Content-Type": "application/json",
  //       // ...(!!token && { Authorization: `Bearer ${token}` }),
  //     },
  //     credentials: 'include',
  //     ...(!!data && { body: JSON.stringify(data) }),
  //   }).then(this._getJsonOrError);
  // }
  authorize(email, password) {
    return fetch(`${this._moviesUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify({ email, password })
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    )
    // return this._getRequest({ url: "/signin", data: { email, password } });
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
