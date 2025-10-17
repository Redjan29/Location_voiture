// ------- MANUELS -------
import opelExt from '../assets/opel-corsa-ext.jpg';
import opelInt from '../assets/opel-corsa-int.jpg';

import yarisExt from '../assets/toyota-yaris-ext.jpg';
import yarisInt from '../assets/toyota-yaris-int.jpg';

import primeraExt from '../assets/nissan-primera-ext.jpg';
import primeraInt from '../assets/nissan-primera-int.jpg';

import micraExt from '../assets/nissan-micra-ext.jpg';
import micraInt from '../assets/nissan-micra-int.jpg';

// ------- AUTOMATIQUES -------
import micraAutoExt from '../assets/nissan-micra-auto-ext.jpg'; // ou réutilise micraExt
import micraAutoInt from '../assets/nissan-micra-auto-int.jpg'; // ou micraInt

import p308Ext from '../assets/peugeot-308-ext.jpg';
import p308Int from '../assets/peugeot-308-int.jpg';


import p5008Ext from '../assets/peugeot-5008-ext.jpg';
import p5008Int from '../assets/peugeot-5008-int.jpg';

import p508Ext from '../assets/peugeot-508-ext.jpg';
import p508Int from '../assets/peugeot-508-int.jpg';

import clioExt from '../assets/renault-clio-ext.jpg';
import clioInt from '../assets/renault-clio-int.jpg';

export const manualCars = [
  {
    id: 1,
    brand: 'Opel',
    model: 'Corsa',
    transmission: 'Manuelle',
    priceDay: 35,
    priceWeekend: 45,
    imageExterior: opelExt,
    imageInterior: opelInt,
  },
  {
    id: 2,
    brand: 'Opel',
    model: 'Corsa',
    transmission: 'Manuelle',
    priceDay: 35,
    priceWeekend: 45,
    imageExterior: opelExt,
    imageInterior: opelInt,
  },
  {
    id: 3,
    brand: 'Toyota',
    model: 'Yaris',
    transmission: 'Manuelle',
    priceDay: 35,
    priceWeekend: 45,
    imageExterior: yarisExt,
    imageInterior: yarisInt,
  },
  {
    id: 4,
    brand: 'Nissan',
    model: 'Primera',
    transmission: 'Manuelle',
    priceDay: 35,
    priceWeekend: 45,
    imageExterior: primeraExt,
    imageInterior: primeraInt,
  },
  {
    id: 5,
    brand: 'Nissan',
    model: 'Micra',
    transmission: 'Manuelle',
    priceDay: 35,
    priceWeekend: 45,
    imageExterior: micraExt,
    imageInterior: micraInt,
  },
];

export const automaticCars = [
  {
    id: 6,
    brand: 'Nissan',
    model: 'Micra',
    transmission: 'Automatique',
    priceDay: 40,
    priceWeekend: 50,
    imageExterior: micraAutoExt || micraExt,
    imageInterior: micraAutoInt || micraInt,
  },
 {
  id: 7,
  brand: 'Peugeot',
  model: '308',
  transmission: 'Automatique',
  priceDay: 40,
  priceWeekend: 55,
  imageExterior: p308Ext,   // ← extérieur
  imageInterior: p308Int,   // ← intérieur
},

  {
    id: 8,
    brand: 'Peugeot',
    model: '5008',
    transmission: 'Automatique',
    priceDay: 50,
    priceWeekend: 65,
    imageExterior: p5008Ext,
    imageInterior: p5008Int,
  },
  {
    id: 9,
    brand: 'Peugeot',
    model: '508',
    transmission: 'Automatique',
    priceDay: 50,
    priceWeekend: 60,
    imageExterior: p508Ext,
    imageInterior: p508Int,
  },
  {
    id: 10,
    brand: 'Renault',
    model: 'Clio',
    transmission: 'Automatique',
    priceDay: 45,
    priceWeekend: 55,
    imageExterior: clioExt,
    imageInterior: clioInt,
  },
];
