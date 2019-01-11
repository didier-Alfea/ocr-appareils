import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === "Allumé") {
      return "green";
    }
    else if (this.appareilStatus === "Eteint")
      {return "red";}
  }

  onSwitchOne() {
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  offSwitchOne() {
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
}
