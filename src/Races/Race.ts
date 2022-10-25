export default abstract class Race {
  private _name: string;
  private _dexterity: number;

  get name(): string { return this._name; }

  get dexterity(): number { return this._dexterity; }

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  } 
  
  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}