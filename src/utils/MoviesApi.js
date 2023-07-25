const apiConfigMovies = {
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
};

class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      headers: {
        "Content-Type": "application/json"
      },
    }).then((res) => this._checkResponse(res));
  }
}

export const apiMovies = new MoviesApi(apiConfigMovies);