import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static instance = 0;

  get energyType(): EnergyType {
    return this._energyType;
  } 

  static createdArchetypeInstances(): number {
    return this.instance;
  }

  constructor(name: string) {
    super(name);
    Warrior.instance += 1;
  }
}