import {Component} from '@angular/core';

@Component({
  selector: 'app-root2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String;
  lista;
  condicion: boolean;

  constructor() {
    this.title = 'helow';
    this.lista = [1, 2, 3, 4, 5];
    this.condicion = true;
  }

  condicionfunc() {

    return true;
  }

}

