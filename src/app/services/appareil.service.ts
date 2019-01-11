export class AppareilService {
  appareils = [
    { id: 1,
      name: 'Machine à laver',
    status: 'Eteint' },
    { id: 2,
      name: 'Lave vaisselle',
    status: 'Allumé' },
    { id: 3,
      name: 'Micro onde',
    status: 'Eteint' },
    { id: 4,
      name: 'Four',
    status: 'Eteint' }
  ];

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    )
    return appareil;
  };

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
