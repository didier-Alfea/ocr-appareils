import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuth = false;

  // lastUpdate = new Date();  passer à un pipe async
  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      // on simule une tempo de 2s
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );  // il faut ajouter un pipe ASYNC ds l'affichage de la date
    }
  )

  appareils: any[];

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }
  onEteindre() {
    this.appareilService.switchOffAll();
  }
}
