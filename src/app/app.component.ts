import { Component } from '@angular/core';
import { NewUserComponent } from './new-user/new-user.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'app';
  
}
