import { Component } from '@angular/core';

@Component({
  selector: 'therapy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Therapy-Application';
  links = [
    { path: '/', icon: 'home', title: 'Login' },
    { path: 'pt', icon: 'view_list', title: 'Transfers' },
  ];
}
