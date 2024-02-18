import { Component } from '@angular/core';

@Component({
  selector: 'app-myheader',
  templateUrl: './myheader.component.html',
  styleUrl: './myheader.component.css'
})
export class MyheaderComponent {
  searchQuery: string = '';
}
