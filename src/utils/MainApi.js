class MainApi {
  constructor(baseUrl, moviesUrl) {
    this._baseUrl = baseUrl;
    this._moviesUrl = moviesUrl;

    this._getJsonOrError = this._getJsonOrError.bind(this);
    this._getHeaders = this._getHeaders.bind(this);
  }


  // getMovies(data) {
  //   return fetch(`${this._moviesUrl}`)
  // }

  _getJsonOrError(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }


}

const api = new MainApi(
  "https://api.mexplorersh.nomoredomains.club",
);

export default api;
