import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesListComponent } from '../movies/components/movies-list/movies-list.component';
import { MovieComponent } from '../movies/components/movie/movie.component';

const moviesRoutes: Routes = [
    { 
        path: 'movies', 
        component: MoviesListComponent 
    },
    { 
        path: 'movie/:id', 
        component: MovieComponent 
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(moviesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MoviesRoutingModule { }