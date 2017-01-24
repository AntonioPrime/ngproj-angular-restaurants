import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    //todo need to implement on angular
    //toggle menu function
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
      //test hide login form
      $("login").toggle();
      //test hide fake login
      $("#menu-toggle").toggle();
    });
  }

  public logout(): void {
    //mock logout
    $("#wrapper").toggleClass("toggled");
    //test show login form
    $("login").toggle();
    //test show fake login
    $("#menu-toggle").toggle();
  }
}
