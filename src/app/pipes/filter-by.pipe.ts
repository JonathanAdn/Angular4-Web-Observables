import { Movie } from '../modules/movies/classes/movie';
import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../modules/characters/classes/character';
import { Router } from '@angular/router';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  constructor(private router: Router) { }

  transform(value: any[], filterBy: string): any[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

    switch(this.router.url) {
      case '/characters': 
        return filterBy ? value.filter((character: Character) =>
            character.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;

      case '/movies': 
        return filterBy ? value.filter((movie: Movie) =>
            movie.title.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
    
  }
}
