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
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
    price: 5.2,
    rating: 4.7,
    votes: 420,
    available: true,
    popular: true,
  },
  {
    id: "2",
    name: "Espresso",
    image:
      "https://images.unsplash.com/photo-1510662145379-13537b1e8a67?q=80&w=1200&auto=format&fit=crop",
    price: 3.5,
    rating: 4.6,
    votes: 380,
    available: true,
  },
  {
    id: "3",
    name: "Latte",
    image:
      "https://images.unsplash.com/photo-1461988625982-7e46a099bf4f?q=80&w=1200&auto=format&fit=crop",
    price: 4.8,
    rating: 4.5,
    votes: 290,
    available: false,
  },
  {
    id: "4",
    name: "Americano",
    image:
      "https://images.unsplash.com/photo-1494415859740-21e878dd929d?q=80&w=1200&auto=format&fit=crop",
    price: 3.9,
    rating: 4.2,
    votes: 190,
    available: true,
  },
  {
    id: "5",
    name: "Flat White",
    image:
      "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?q=80&w=1200&auto=format&fit=crop",
    price: 4.9,
    rating: 4.8,
    votes: 510,
    available: true,
    popular: true,
  },
  {
    id: "6",
    name: "Mocha",
    image:
      "https://images.unsplash.com/photo-1503481766315-7a586b20f66f?q=80&w=1200&auto=format&fit=crop",
    price: 5.1,
    rating: 4.4,
    votes: 210,
    available: false,
  },
  {
    id: "7",
    name: "Macchiato",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop",
    price: 4.2,
    rating: 4.1,
    votes: 130,
    available: true,
  },
  {
    id: "8",
    name: "Irish Coffee",
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop",
    price: 6.5,
    rating: 4.3,
    votes: 165,
    available: true,
  },
  {
    id: "9",
    name: "Affogato",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
    price: 5.7,
    rating: 4.6,
    votes: 230,
    available: false,
  },
  {
    id: "10",
    name: "Cold Brew",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1200&auto=format&fit=crop",
    price: 4.0,
    rating: 4.0,
    votes: 115,
    available: true,
  },
  {
    id: "11",
    name: "Cortado",
    image:
      "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=1200&auto=format&fit=crop",
    price: 4.4,
    rating: 4.2,
    votes: 150,
    available: true,
  },
  {
    id: "12",
    name: "Turkish Coffee",
    image:
      "https://images.unsplash.com/photo-1494883759339-0b042055a4ee?q=80&w=1200&auto=format&fit=crop",
    price: 4.6,
    rating: 4.3,
    votes: 175,
    available: false,
  },
];


