import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public currentYear: number;

    public ngOnInit(): void {
        this.currentYear = new Date().getFullYear();
    }
}
