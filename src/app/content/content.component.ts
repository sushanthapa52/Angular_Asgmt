import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'

})
export class ContentComponent {
  imageURL: string = 'assets/images/mobpic.jpg'; 
  pageTitle: string = 'Welcome!';
  section2Content: string = 'Image shown below is example of one way data binding';
  userInput: string = '';

  sushan = {
    name: 'Sushan',
    homecountry: 'Nepal',
    collge: 'Cambrian college',
    hobby : 'badminton',
    programming : '.NET'

  }
 

  display = false;

  onClick(){
      this.display = true;
  }

}
