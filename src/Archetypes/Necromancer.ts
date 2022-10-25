import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _instance = 0;

  get energyType(): EnergyType {
    return this._energyType;
  } 

  static createdArchetypeInstances(): number {
    return this._instance;
  }

  constructor(name: string) {
    super(name);
    Necromancer._instance += 1;
  }
}