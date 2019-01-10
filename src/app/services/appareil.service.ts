export class AppareilService {
  appareils = [
    { name: 'Machine à laver',
    status: 'Eteint' },
    { name: 'Lave vaisselle',
    status: 'Allumé' },
    { name: 'Micro onde',
    status: 'Eteint' },
    { name: 'Four',
    status: 'Eteint' }
  ];

  switchOnAll() {
    for(let appareil of this.appareils) {
      appareil.status = "Allumé";
    }
  }
  switchOffAll() {
    for(let appareil of this.appareils) {
      appareil.status = "Eteint";
    }
  }

  switchOnOne(index: number) {
    this.appareils[index].status = "Allumé";
  }
  switchOffOne(index: number) {
    this.appareils[index].status = "Eteint";
  }
}
