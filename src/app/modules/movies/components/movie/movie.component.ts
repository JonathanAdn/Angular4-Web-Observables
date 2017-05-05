import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../classes/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  moduleId: module.id,
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  private movie: Movie;

  constructor(private router: Router, private route: ActivatedRoute, private moviesService: MoviesService) { }

  private gotoMovies(): void {
    this.router.navigate(['/movies']);
  }

  ngOnInit(): void {
    let id: (string | number) = +this.route.snapshot.params['id'];
    this.moviesService.getMovie(id).then((movie: Movie) => this.movie = movie);
  }

}
