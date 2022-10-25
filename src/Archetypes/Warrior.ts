import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _instance = 0;

  get energyType(): EnergyType {
    return this._energyType;
  } 

  static createdArchetypeInstances(): number {
    return this._instance;
  }

  constructor(name: string) {
    super(name);
    Warrior._instance += 1;
  }
}