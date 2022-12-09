import { Ammunition } from './ammunition';

export interface Caliber {
  name: string;
  ammunitions: Ammunition[];
}

export const caliberNiceNames: { name: string, niceName: string }[] = [
  {name: '556x45NATO', niceName: '5.56x45mm'},
  {name: '12g', niceName: '12/70mm'},
  {name: '762x54R', niceName: '7.62x54mm R'},
  {name: '762x39', niceName: '7.62x39mm'},
  {name: '40mmRU', niceName: '40x46mm'},
  {name: '9x19PARA', niceName: '9x19mm'},
  {name: '545x39', niceName: '5.45x39mm'},
  {name: '762x25TT', niceName: '7.62x25mm'},
  {name: '9x18PM', niceName: '9x18mm'},
  {name: '9x39', niceName: '9x39mm'},
  {name: '762x51', niceName: '7.62x51mm'},
  {name: '366TKM', niceName: '.366 TKM'},
  {name: '9x21', niceName: '9x21mm'},
  {name: '20g', niceName: '20/70mm'},
  {name: '46x30', niceName: '4.6x30mm'},
  {name: '127x55', niceName: '12.7x55mm'},
  {name: '57x28', niceName: '5.7x28mm'},
  {name: '1143x23ACP', niceName: '.45 ACP'},
  {name: '23x75', niceName: '23x75mm'},
  {name: '40x46', niceName: '40x46mm'},
  {name: '762x35', niceName: '.300'},
  {name: '86x70', niceName: '.338'},
  {name: '9x33R', niceName: '.357'},
  {name: '26x75', niceName: '26x75mm'},
];
