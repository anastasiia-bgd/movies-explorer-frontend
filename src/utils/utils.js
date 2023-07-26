export function durationConverter(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  }

  export const setMoviesOnLocalStorage = (movie) => {
    const data = localStorage.getItem("savedMovies")

    if (!data) {
      localStorage.setItem("savedMovies", JSON.stringify([movie]))
      return
    }
    const movies = JSON.parse(data);
    const oldSaveMovie = movies.find(film => film.movieId === movie.id)
    if (!oldSaveMovie) {
      localStorage.setItem("savedMovies", JSON.stringify([...movies, movie]))
    }
    return
  }

  const checkId = (movie) => {
    if(movie.id) return movie.id
  
    return movie.movieId
  }

  export const deleteMoviesOnLocalStorage = (movie) => {
    const data = localStorage.getItem("savedMovies")
  
    if (!data) {
      return 
    }
    const movies = JSON.parse(data);
    const newSavedMovies = movies.filter( film => film.movieId !== checkId(movie))
    localStorage.setItem("savedMovies", JSON.stringify(newSavedMovies))
  
    return 
  }