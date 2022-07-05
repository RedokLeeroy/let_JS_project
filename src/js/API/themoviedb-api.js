export class ThemoviedbAPI {
  #BASE_URL = 'https://api.themoviedb.org/3/';
  #API_KEY = '?api_key=7a4cd4317772102a9b88ef6a54b71590';

  #page = 1;
  #keyword;

  constructor(keyword = '') {
    this.#keyword = keyword;
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

  async getSertchMovie() {
    this.#keyword = 'cat'; //тимчасово

    const option = 'keyword';

    const search = 'search';

    try {
      return await fetch(
        `${this.#BASE_URL}${search}/${option}${this.#API_KEY}&query=${
          this.#keyword
        }&page=${this.#page}`
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
    this.#page = 0;
  }

  get page() {
    return this.#page;
  }

  set page(value) {
    this.#page = value;
  }

  get keyword() {
    return this.#keyword;
  }

  set keyword(value) {
    this.#keyword = value;
  }

  get BASE_URL() {
    return this.#BASE_URL;
  }
}
