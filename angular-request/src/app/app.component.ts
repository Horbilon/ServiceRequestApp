import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  page = 'create';
  title = 'angular-request';

  change(text:string){
    this.page=text;
  }
}
