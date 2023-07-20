import { Component, Inject } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';
import { WINDOW } from './util/window.injectable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn: boolean = false;

  constructor(private localeStorageService: LocalStorageService, @Inject(WINDOW) private window: Window) {
    const token = this.localeStorageService.get('authToken');

    if (token) {
      this.loggedIn = true;
    }
  }

  logout() {
    this.localeStorageService.remove('authToken');
    this.window.location.reload();
  }

}
