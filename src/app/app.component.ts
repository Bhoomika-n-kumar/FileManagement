import { Component } from '@angular/core';
import { SharingService } from './sharing.service';
import { AdfolderComponent } from './adfolder/adfolder.component';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SharingService],
})
export class AppComponent {
  title = 'uploadNDisplay';
}
