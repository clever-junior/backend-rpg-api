import { EnergyType } from '../Energy';

export default abstract class Archetype {
  get special(): number { return this._special; }

  get cost(): number { return this._cost; }

  get name(): string { return this._name; }
  
  abstract get energyType(): EnergyType;

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }
  
  constructor(
    private _name: string,
    private _special = 0,
    private _cost = 0,
  ) {}
}