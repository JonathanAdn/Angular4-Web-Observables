import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from '../../classes/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  moduleId: module.id,
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  private movies: Movie[];
  private selectedMovie: Movie;
  private searchFilter: string = '';

  constructor(private moviesService: MoviesService, private router: Router) { }

  private getMovies(): void {
    this.moviesService.getMovies()
      .then(movies => this.movies = movies);
  }

  private onSelect(selectedMovie: Movie): void {
    this.router.navigate(['/movie', selectedMovie.episode_id]);
  }

  ngOnInit(): void {
    this.getMovies();
  }

}