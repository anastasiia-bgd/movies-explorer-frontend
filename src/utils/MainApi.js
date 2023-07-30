class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getUserInfo() {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => this._checkResponse(res));
  }

  logout() {
    return fetch(`${this._baseUrl}/signout`, {
      method: "GET",
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  editUserInfo(obj) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: obj.name,
        email: obj.email,
      }),
    }).then((res) => this._checkResponse(res));
  }

  addSavedMovies(movie) {
    const imageBaseUrl = "https://api.nomoreparties.co";
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: imageBaseUrl + movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: imageBaseUrl + movie.image.formats.thumbnail.url,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN
      })
    }).then(this._checkResponse)
  }

    getSavedMovies() {
      const token = localStorage.getItem("jwt");
      return fetch(`${this._baseUrl}/movies`, {
        method: "GET",
        credentials: "include",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        return this._checkResponse(res);
      });
    }

    deleteSavedMovie(movieId) {
      const token = localStorage.getItem("jwt");
      return fetch(`${this._baseUrl}/movies/${movieId}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }).then((res) => this._checkResponse(res));
    }
}

const api = new MainApi({
  baseUrl: 'https://api.omovies.nomoredomains.rocks',
})

export default api;
