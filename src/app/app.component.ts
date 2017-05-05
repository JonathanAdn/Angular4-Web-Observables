import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string = 'Star Wars Trivia';
  private navLinks: any[] = [{'url':'/movies', 'label': 'Movies'}, {'url': '/characters', 'label': 'Characters'}];
}
