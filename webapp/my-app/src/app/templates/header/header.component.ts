import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    user_data;

    constructor() {
      this.user_data = localStorage.getItem('user_data');
    }

    ngOnInit() {

    }

}
