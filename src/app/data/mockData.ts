export interface Store {
  id: string;
  name: string;
  distance: string;
  available: boolean;
  stock: number;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  coverUrl: string;
  price: number;
  rating: number;
  stores: Store[];
}

export const STORES: Store[] = [
  { id: 's1', name: 'Livraria Centro', distance: '1.2 km', available: true, stock: 5 },
  { id: 's2', name: 'Shopping Sul', distance: '4.5 km', available: false, stock: 0 },
  { id: 's3', name: 'Estação Norte', distance: '8.0 km', available: true, stock: 2 },
];

export const BOOKS: Book[] = [
  {
    id: '1',
    title: 'A Lenda do Dragão',
    author: 'Elena K. Santos',
    category: 'FANTASIA',
    coverUrl: 'https://images.unsplash.com/photo-1711185892188-13f35959d3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc3NTExODA1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 49.90,
    rating: 4.8,
    stores: [
      { id: 's1', name: 'Livraria Centro', distance: '1.2 km', available: true, stock: 3 },
      { id: 's2', name: 'Shopping Sul', distance: '4.5 km', available: false, stock: 0 }
    ]
  },
  {
    id: '2',
    title: 'Empreendedorismo na Prática',
    author: 'Carlos Almeida',
    category: 'NEGÓCIOS',
    coverUrl: 'https://images.unsplash.com/photo-1579540830482-659e7518c895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbnVhbCUyMGJvb2t8ZW58MXx8fHwxNzc1MTgzNzkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 65.00,
    rating: 4.5,
    stores: [
      { id: 's1', name: 'Livraria Centro', distance: '1.2 km', available: false, stock: 0 },
      { id: 's3', name: 'Estação Norte', distance: '8.0 km', available: true, stock: 12 }
    ]
  },
  {
    id: '3',
    title: 'Galáxias Distantes',
    author: 'A. B. Silva',
    category: 'FICÇÃO CIENTÍFICA',
    coverUrl: 'https://images.unsplash.com/photo-1612570328404-fc96e7ba6d18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2klMjBmaSUyMGJvb2slMjBhc3Ryb25vbXl8ZW58MXx8fHwxNzc1MTgzNzkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 39.50,
    rating: 4.2,
    stores: [
      { id: 's1', name: 'Livraria Centro', distance: '1.2 km', available: true, stock: 5 },
      { id: 's2', name: 'Shopping Sul', distance: '4.5 km', available: true, stock: 8 }
    ]
  },
  {
    id: '4',
    title: 'Amores de Verão',
    author: 'Mariana Costa',
    category: 'ROMANCE',
    coverUrl: 'https://images.unsplash.com/photo-1735805819333-19bed84b654e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwbm92ZWwlMjBib29rfGVufDF8fHx8MTc3NTEzMzgwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 29.90,
    rating: 4.9,
    stores: [
      { id: 's2', name: 'Shopping Sul', distance: '4.5 km', available: true, stock: 1 }
    ]
  }
];