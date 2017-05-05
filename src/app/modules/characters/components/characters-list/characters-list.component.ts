import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

import { Character } from '../../classes/character';
import { User } from '../../classes/user';

import { CharactersService } from '../../services/characters.service';
import { DialogsService } from '../../services/dialogs.service';
import { UserService } from '../../services/user.service';

@Component({
  moduleId: module.id,
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  private characters: Character[];
  private users: User[];
  private selectedCharacter: Character;
  private deletedCharacter: string;
  private searchFilter: string = '';

  constructor(private characterService: CharactersService,
              private userService: UserService, 
              private router: Router, 
              private dialogsService: DialogsService,
              private snackBar: MdSnackBar) { }

  private getCharacters(): void {
    this.characterService.getCharacters()
      .subscribe(characters => this.characters = characters,
                 err => console.log(err));
  }

  private getUsers(): void {
    this.userService.getSheetsuUsers()
      .subscribe(users => this.users = users,
                 err => console.log(err));
  }

  private onSelect(selectedCharacter: Character): void {
    this.router.navigate(['/character', selectedCharacter.id]);
  }

  private resetSearch(): void {
    this.searchFilter = '';
  }

  private goToCharacterForm(): void {
    this.router.navigate(['/character-form']);
  }

  private goToUserForm(): void {
    this.router.navigate(['/user-form']);
  }

  private removeCharacter(id: number, charName: string): void {
    this.dialogsService
      .confirm('Deleting ' + charName + '...', 'Are you sure?')
      .subscribe(res => { 
        if(res === true) {
          this.characterService.removeCharacter(id)
            .subscribe(() => {
              this.snackBar.open(charName + ' has been removed!', 'OK', {
                duration: 3000,
              })
            });
        }
      })
  }

  private removeUser(user: User, index: number): void {
    this.dialogsService
      .confirm('Deleting ' + user.name + '...', 'Are you sure?')
      .subscribe(res => { 
        if(res === true) {
          this.userService.removeUser(user)
            .subscribe(() => {
              this.users.splice(index, 1);
              this.snackBar.open(user.name + ' has been removed!', 'OK', {
                duration: 3000,
              })
            });
        }
      })
  }

  private editUser(user: User): void {
    this.router.navigate(['/user-form', user.id]);
  }

  private editCharacter(character: Character): void {
    this.router.navigate(['/character-form', character.id]);
  }

  ngOnInit(): void {
    this.getCharacters();
    this.getUsers();
  }

}