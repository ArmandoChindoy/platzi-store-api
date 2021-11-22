import * as express from 'express';
import { Request, Response } from 'express';
require('dotenv').config();

const PORT = process.env.PORT;
// const HOST = '0.0.0.0';

const app = express();

const initialState = {
  cart: [],
  products: [
    {
      id: '1',
      image: 'https://arepa.s3.amazonaws.com/camiseta.png',
      title: 'Camiseta',
      price: 25,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '3',
      image: 'https://arepa.s3.amazonaws.com/mug.png',
      title: 'Mug',
      price: 10,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '4',
      image: 'https://arepa.s3.amazonaws.com/pin.png',
      title: 'Pin',
      price: 4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '5',
      image: 'https://arepa.s3.amazonaws.com/stickers1.png',
      title: 'Stickers',
      price: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '6',
      image: 'https://arepa.s3.amazonaws.com/stickers2.png',
      title: 'Stickers',
      price: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '7',
      image: 'https://arepa.s3.amazonaws.com/hoodie.png',
      title: 'Hoodie',
      price: 35,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ],
};

console.log('hola');
app.get('/api/v1', (req: Request, res: Response) => {
  res.json(initialState);
});

app.listen(3000, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
