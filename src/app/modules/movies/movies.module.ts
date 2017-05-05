import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from '../movies/movies-routing.module';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { MoviesListComponent } from '../movies/components/movies-list/movies-list.component';
import { MovieComponent } from '../movies/components/movie/movie.component';
import { MoviesService } from '../movies/services/movies.service';

@NgModule({
    imports: [
        CommonModule, 
        FormsModule,
        MoviesRoutingModule, 
        MaterialModule.forRoot(),
        SharedModule
    ],
    declarations: [
        MoviesListComponent, 
        MovieComponent
    ],
    providers: [
        MoviesService
    ]
})
export class MoviesModule { }