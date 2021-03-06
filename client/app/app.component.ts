import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})

export class AppComponent {
  
  catNav: boolean = false;

  constructor(public auth: AuthService,
              public router: Router) { }

}
