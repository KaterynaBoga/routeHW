import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  public models = [
    {
      id: 1,
      brand: 'Tesla',
      models: [
        {
          id: 1,
          model: 'Tesla Motors Model 3',
          description: 'первая бюджетная модель с самым длинным пробегом на одном заряде'
        },
        {
          id: 2,
          model: 'Tesla Motors Model S ',
          description: 'хорошая машина'
        },
        {
          id: 3,
          model: 'Tesla Motors Model X',
          description: 'большая семейная машина'
        },
        {
          id: 4,
          model: 'Tesla Motors Roadster',
          description: 'спортивная машина'
        }
      ]
    },
    {
      id: 2,
      brand: 'Ferrari',
      models: [
        {
          id: 1,
          model: '458 Italia. 1 поколение',
          description: 'поколение, 2009 - сегодня'
        },
        {
          id: 2,
          model: '458 Speciale. 1 поколение',
          description: '2014 - 2015'
        },
        {
          id: 3,
          model: '488 Pista. 1 поколение',
          description: '2019 - сегодня'
        },
        {
          id: 4,
          model: '575 M Maranello. 1 поколение',
          description: '2002 - 2006'
        }
      ]
    }];

  getBrands() {
    return this.models;
  }

  getModels(id) {
    for (let i = 0; i < this.models.length; i++) {
      if(this.models[i].id === id) {
        return this.models[i].models;
      }
    }

    return[];
  }
  constructor() { }
}
