export type Coffee = {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  votes: number;
  available: boolean;
  popular?: boolean;
};

export const COFFEES: Coffee[] = [
  {
    id: "1",
    name: "Cappuccino",
    image: "capuccino.jpeg",
    price: 5.2,
    rating: 4.7,
    votes: 420,
    available: true,
    popular: true,
  },
  {
    id: "2",
    name: "Espresso",
    image: "espresso.jpg",
    price: 3.5,
    rating: 4.6,
    votes: 380,
    available: true,
  },
  {
    id: "3",
    name: "Latte",
    image: "latte.jpg",
    price: 4.8,
    rating: 4.5,
    votes: 290,
    available: false,
  },
  {
    id: "4",
    name: "Americano",
    image: "americano.jpeg",
    price: 3.9,
    rating: 4.2,
    votes: 190,
    available: true,
  },
  {
    id: "5",
    name: "Flat White",
    image: "flatwhite.jpg",
    price: 4.9,
    rating: 4.8,
    votes: 510,
    available: true,
    popular: true,
  },
  {
    id: "6",
    name: "Mocha",
    image: "mocha.webp",
    price: 5.1,
    rating: 4.4,
    votes: 210,
    available: false,
  },
  {
    id: "7",
    name: "Macchiato",
    image: "macchiato.jpg",
    price: 4.2,
    rating: 4.1,
    votes: 130,
    available: true,
  },
  {
    id: "9",
    name: "Affogato",
    image: "affogato.webp",
    price: 5.7,
    rating: 4.6,
    votes: 230,
    available: false,
  },
  {
    id: "10",
    name: "Cold Brew",
    image: "coldbrew.jpg",
    price: 4.0,
    rating: 4.0,
    votes: 115,
    available: true,
  },
  {
    id: "11",
    name: "Cortado",
    image: "cortado.jpg",
    price: 4.4,
    rating: 4.2,
    votes: 150,
    available: true,
  },
];


