import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersRoutingModule } from '../characters/characters-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { CharactersListComponent } from '../characters/components/characters-list/characters-list.component';
import { CharacterComponent } from '../characters/components/character/character.component';
import { CharacterFormComponent } from '../characters/components/character-form/character-form.component';
import { ConfirmDialogComponent } from '../characters/components/confirm-dialog/confirm-dialog.component';
import { UserFormComponent } from './components/user-form/user-form.component';

import { DialogsService } from './services/dialogs.service';
import { CharactersService } from '../characters/services/characters.service';
import { UserService } from '../characters/services/user.service';


@NgModule({
    imports: [
        CommonModule, 
        CharactersRoutingModule, 
        SharedModule,
        MaterialModule.forRoot(),
        FormsModule
    ],
    declarations: [
        CharactersListComponent, 
        CharacterComponent, 
        CharacterFormComponent, 
        ConfirmDialogComponent, 
        UserFormComponent
    ],
    providers: [
        CharactersService,
        DialogsService,
        UserService
    ],
    entryComponents: [ConfirmDialogComponent]
})
export class CharactersModule { }