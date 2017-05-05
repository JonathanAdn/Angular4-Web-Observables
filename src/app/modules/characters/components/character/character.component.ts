import { Component, OnInit, HostBinding, NgZone } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { slideInDownAnimation } from 'app/animations';

import { Character } from '../../classes/character';
import { CharactersService } from '../../services/characters.service';

@Component({
  moduleId: module.id,
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  animations: [ slideInDownAnimation ]
})
export class CharacterComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'absolute';

  private character: Character;

  constructor(private route: ActivatedRoute, private router: Router, private charactersService: CharactersService, private zone: NgZone) { }

  private gotoCharacters() {
    this.router.navigate(['/characters']);
  }

  ngOnInit() {
    // Observable alternative
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.charactersService.getCharacter(+params['id']))
      .subscribe((character: Character) => {
        this.character = character;
      });
    // (+) converts string 'id' to a number
    // let id: (string | number) = +this.route.snapshot.params['id'];
  }

}
