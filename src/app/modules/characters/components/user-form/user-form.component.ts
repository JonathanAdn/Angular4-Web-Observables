import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MdSnackBar } from '@angular/material';

import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';

@Component({
  moduleId: module.id,
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  private user: User = <User>{ id: null, name: '', score: null };
  private isLoading: boolean = true;

  constructor(private router: Router, 
              private userService: UserService, 
              private route: ActivatedRoute, 
              private zone: NgZone, 
              private snackBar: MdSnackBar) { }

  private cancel(): void {
    this.router.navigate(['/characters']);
  }   

  private editUser(user: User): void {
    this.userService.updateUser(user)
      .subscribe(() => {
        this.router.navigate(['/characters']);
        this.snackBar.open(user.name + ' has been edited!', 'OK', {
          duration: 3000,
        });
      },
      err => console.log(err))
  }  

  private newUser(user: User): void {
    this.isLoading = true;
    this.userService.addUser(user)
      .subscribe(user => {
        this.isLoading = false;
        this.router.navigate(['/characters']);
        this.snackBar.open(user.name + ' has been added!', 'OK', {
          duration: 3000,
        });
      },
      err => console.log(err))
  }       

  ngOnInit() {
    let id: (string | number) = +this.route.snapshot.params['id'];

    if(!isNaN(id)) {
      this.route.params
        // (+) converts string 'id' to a number
        .switchMap((params: Params) => this.userService.getUser(+params['id']))
        .subscribe((user: User) => {
          this.zone.run(() => {
            this.user = user;
            this.isLoading = false;
          })
        });
    } else {
      this.isLoading = false;
    }
  }

}
