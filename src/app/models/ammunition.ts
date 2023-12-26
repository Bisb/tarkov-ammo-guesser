import { Caliber } from './caliber';

export interface Ammunition {
  caliber: Caliber;
  name: string;
  imageUrl: string;
  tracer: boolean;
  tracerColor?: string;
  damage: number;
  penetrationPower: number;
  projectileCount: number;
  armorDamage: number;
  penetrationChance: number;
  fragmentationChance: number;
  ricochetChance: number;
  accuracyModifier: number;
  recoilModifier: number;
  initialSpeed: number;
  lightBleedModifier: number;
  heavyBleedModifier: number;
  wikiLink: string;
  normalizedName: string;
}
