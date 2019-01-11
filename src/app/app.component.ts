import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  secondes: number;

  constructor() { }

  ngOnInit() {
    const counter = Observable.interval(1000);
    counter.subscribe(
       (value: number) => {
         this.secondes = value;
       },
       (error: any) => {
         console.log('Une erreur a été rencontrée' + error);
       },
       () => {
         console.log('Observable complétée !');
       }
     )
   };
 }
