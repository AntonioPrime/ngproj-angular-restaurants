import {Restaurant} from "./restaurant";

export const RESTAURANTS: Restaurant[] = [
  {
    name: 'Cuba',
    location: {x: 10, y: 15},
    openTime: '09:00',
    closeTime: '22:00',
    menu: [
      {
        description: 'Soup',
        price: 10.0,
        preparingTime: 25
      },
      {
        description: 'Sushi',
        price: 5.0,
        preparingTime: 30
      },
      {
        description: 'Steak',
        price: 15.0,
        preparingTime: 35
      }
    ]
  },
  {
    name: 'Palace',
    location: {x: 60, y: 32},
    openTime: '11:00',
    closeTime: '23:00',
    menu: [
      {
        description: 'Burger',
        price: 4.0,
        preparingTime: 15
      }, {
        description: 'Caesar',
        price: 11.0,
        preparingTime: 25
      },
      {
        description: 'Pasta',
        price: 8.0,
        preparingTime: 20
      }
    ]
  },
  {
    name: 'Dance',
    location: {x: -12, y: 72},
    openTime: '10:00',
    closeTime: '21:00',
    menu: [
      {
        description: 'Borsch',
        price: 10.0,
        preparingTime: 33
      },
      {
        description: 'Falafel',
        price: 9.0,
        preparingTime: 10
      },
      {
        description: 'Kebab',
        price: 9.0,
        preparingTime: 15
      }
    ]
  }
];
