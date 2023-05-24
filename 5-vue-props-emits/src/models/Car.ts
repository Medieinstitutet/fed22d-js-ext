export class Car {
  isOwned: boolean;

  constructor(public model: string, public color: string, public year: number) {
    this.isOwned = false;
  }
}
