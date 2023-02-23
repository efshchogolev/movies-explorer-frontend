class MainApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;

    this._getJsonOrError = this._getJsonOrError.bind(this);
    // this._getHeaders = this._getHeaders.bind(this);
  }



  _getJsonOrError(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  saveMovie(movie) {

    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify(movie)
    }).then(
      this._getJsonOrError
    )
  }

  register = (name, password, email) => {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, password, email })
    })
      .then(
        this._getJsonOrError
      )
  };


}

const mainApi = new MainApi(
  // "https://api.mexplorersh.nomoredomains.club",
  "http://localhost:3001"
);

export default mainApi;
