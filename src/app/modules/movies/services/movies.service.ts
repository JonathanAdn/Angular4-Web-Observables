import { Injectable } from '@angular/core';
import { Movie } from '../classes/movie';
import { MOVIES } from '../classes/data-movies';

@Injectable()
export class MoviesService {

  constructor() { }

  moviesPromise: Promise<Movie[]> = Promise.resolve(MOVIES);

  getMovies(): Promise<Movie[]> {
    return Promise.resolve(MOVIES);
  }

  getMovie(id: number | string): Promise<Movie> {
    return this.moviesPromise
      .then(movies => movies.find(movie => movie.episode_id === +id))
  }

}
