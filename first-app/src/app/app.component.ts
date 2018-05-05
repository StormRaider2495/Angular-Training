import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'Chicken Dinner';

  onUpdateMessageClick() {
    this.message = 'No Chicken';
  }
}
