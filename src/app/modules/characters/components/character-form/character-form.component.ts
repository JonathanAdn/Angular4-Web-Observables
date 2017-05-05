import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { FileUploader } from 'ng2-file-upload';

import { Character } from '../../classes/character';
import { Address } from '../../classes/address';
import { Company } from '../../classes/company';
import { Geo } from '../../classes/geo';
import { CharactersService } from '../../services/characters.service';

@Component({
  moduleId: module.id,
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css']
})
export class CharacterFormComponent implements OnInit {

  private geo: Geo = <Geo>{ lat: '', lng: '' };
  private address: Address = <Address>{ street: '', suite: '', city: '', zipcode: '', geo: this.geo };
  private company: Company = <Company>{ name: '', catchPhrase: '', bs: '' };
  private character: Character = <Character>{ id: null, name: '', username: '', email: '', address: this.address, phone: '', website: '', company: this.company };
  private submitted: boolean = false;
  private genders: string[] = ['male', 'female', 'n/a'];
  private uploader = new FileUploader({url: 'http://localhost:4200/assets/imgs/characters/'});
  

  constructor(private router: Router, 
              private charactersService: CharactersService, 
              private route: ActivatedRoute, 
              private zone: NgZone, 
              private snackBar: MdSnackBar) { }

  private onSubmit() { 
    this.submitted = true;
  }

  private newCharacter(character: Character): void {
    this.charactersService.addCharacter(character)
      .subscribe(character => {
        this.router.navigate(['/characters']);
        this.snackBar.open(character.name + ' has been created!', 'OK', {
          duration: 3000,
        });
      },
      err => console.log(err))
  }

  private editCharacter(character: Character): void {
    this.charactersService.updateCharacter(character)
      .subscribe(character => {
        this.character = character;
        // this.router.navigate(['/characters']);
        this.snackBar.open(character.name + ' has been edited!', 'OK', {
          duration: 3000,
        });
      },
      err => console.log(err))
  }

  private cancel(): void {
    this.router.navigate(['/characters']);
  }

  ngOnInit(): void {
    let id: (string | number) = +this.route.snapshot.params['id'];

    if(!isNaN(id)) {
      this.route.params
        // (+) converts string 'id' to a number
        .switchMap((params: Params) => this.charactersService.getCharacter(+params['id']))
        .subscribe((character: Character) => {
          this.zone.run(() => {
            this.character = character;
          });
        });
    }
  }
}
