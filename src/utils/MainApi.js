class MainApi {
    constructor({baseUrl}) {
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
      return fetch(`${this._baseUrl}/users/me`, {
        credentials: "include",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }).then((res) => this._checkResponse(res));
    }

    logout() {
      return fetch(`${this._baseUrl}/signout`, {
        method: "GET",
        credentials: "include",
      }).then((res) => {
        return this._checkResponse(res);
      });
    }

    editUserInfo(obj) {
      const token = localStorage.getItem("jwt");
      return fetch(`${this._baseUrl}/users/me`, {
        method: "PATCH",
        credentials: "include",
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
  }

  const api = new MainApi({
    baseUrl: 'https://api.omovies.nomoredomains.rocks',
  })
  
  export default api;
  