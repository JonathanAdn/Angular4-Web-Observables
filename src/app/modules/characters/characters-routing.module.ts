import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersListComponent } from '../characters/components/characters-list/characters-list.component';
import { CharacterComponent } from '../characters/components/character/character.component';
import { CharacterFormComponent } from '../characters/components/character-form/character-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';

const charactersRoutes: Routes = [
    { path: 'characters', component: CharactersListComponent },
    { path: 'character/:id', component: CharacterComponent },
    { path: 'character-form', component: CharacterFormComponent },
    { path: 'character-form/:id', component: CharacterFormComponent },
    { path: 'user-form', component: UserFormComponent },
    { path: 'user-form/:id', component: UserFormComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(charactersRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CharactersRoutingModule { }