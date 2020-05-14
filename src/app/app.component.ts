import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'next-insurance-home-task';

  constructor(private loginService: LoginService) {}

  get loggedOut() {
    return !this.loginService.loggedin;
  }
}
