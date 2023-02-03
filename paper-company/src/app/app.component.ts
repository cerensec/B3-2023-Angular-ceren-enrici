import { Component, Output } from '@angular/core';
import { Paper } from './model/paper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Paper Company';
  currentPaper: Paper | null = null;
  newPaper: Paper | null = null;

  onPaperClick(eventData: Paper){
    this.title = eventData.nom;
    this.currentPaper = eventData;
  }
}
