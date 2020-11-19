import {Content} from './content-interface';

export const ItemList: Content[] = [{
  id: 0,
  title: 'This is Yonis',
  author: 'the author of this project',
  tags: ['person', 'info', 'the author'],
  type: 'author',
  imageUrl: 'https://darksouls.wdfiles.com/local--files/npcs/solaire-of-astora-large.jpg',
  body: 'If only i was so grossly incandescent'
},

  {
    id: 1,
    title: 'This is Saad',
    author: 'Yonis Sheekh',
    tags: ['person', 'info'],
    type: 'student',
    imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/552990/header.jpg?t=1602092003',
    body: 'he likes to play world of warships'
  },
  {
    id: 2,
    title: 'This is Owen',
    author: 'also Yonis Sheekh',
    tags: ['person', 'info'],
    type: 'student',
    imageUrl: '',
    body: 'he likes Star Citizen but the game is never coming out'
  },
  {
    id: 3,
    title: 'This is Nick',
    author: 'also also Yonis Sheekh',
    tags: ['person', 'info'],
    type: 'student',
    imageUrl: '',
    body: 'he likes League of legends. league bad >:('
  },
  {
    id: 4,
    title: 'This is no one',
    author: 'its ya boy Yonis Sheekh again',
    tags: ['subject', 'space and stuff'],
    type: 'Science',
    imageUrl: 'https://www.esa.int/var/esa/storage/images/19716864-11-eng-GB/ESA_root_pillars.jpg',
    body: 'vast emptiness of space and time'
  }];
