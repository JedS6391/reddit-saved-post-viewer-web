import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorisation',
  templateUrl: './authorisation.component.html',
  styleUrls: ['./authorisation.component.css']
})
export class StartAuthorisationComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    console.log('ngOnInit');
  }
}
