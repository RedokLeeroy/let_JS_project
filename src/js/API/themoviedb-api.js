export class ThemoviedbAPI {
  #BASE_URL = 'https://api.themoviedb.org/3/';
  #API_KEY = '?api_key=7a4cd4317772102a9b88ef6a54b71590';

  constructor() {
    this.page = 1
  }

  async getMovies() {
    const trending = 'trending';
    const mediaType = 'movie';
    const timeWindow = 'day';

    try {
      return await fetch(
        `${this.#BASE_URL}${trending}/${mediaType}/${timeWindow}${
          this.#API_KEY
        }`
      ).then(res => res.json());
    } catch (arr) {
      console.log(err);
    }
  }

  async getSertchMovie(keyword) {

    const option = 'keyword';
    const search = 'search';

    try {
      return await fetch(
        `${this.#BASE_URL}${search}/${option}${this.#API_KEY}&query=${
          keyword
        }&page=${this.page}`
      ).then(res => res.json());
    } catch (arr) {
      console.log(err);
    }
  }

  async getGanres() {
    const genre = 'genre';
    const option = 'movie';
    const list = 'list';

    try {
      return await fetch(
        `${this.#BASE_URL}${genre}/${option}/${list}${this.#API_KEY}`
      ).then(res => res.json());
    } catch (arr) {
      console.log(err);
    }
  }

  resetPage() {
    this.page = 1;
  }

}