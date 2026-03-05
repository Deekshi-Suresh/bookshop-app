export interface Review {
  id: string;
  bookId: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  helpful: number;
}

export const initialReviews: Review[] = [
  {
    id: '1',
    bookId: '1',
    userName: 'Amit K.',
    rating: 5,
    title: 'A masterpiece of American literature',
    comment: 'The Great Gatsby is absolutely captivating. Fitzgerald\'s prose is elegant and the story of Jay Gatsby is unforgettable. A must-read for everyone.',
    date: '2024-02-15',
    helpful: 45,
  },
  {
    id: '2',
    bookId: '1',
    userName: 'Priya S.',
    rating: 4,
    title: 'Great story, but can be slow at times',
    comment: 'Beautiful writing and compelling narrative, though some parts felt dragging. Still a classic worth reading.',
    date: '2024-02-10',
    helpful: 23,
  },
  {
    id: '3',
    bookId: '7',
    userName: 'Rajesh M.',
    rating: 5,
    title: 'Perfect introduction to the wizarding world',
    comment: 'Harry Potter is magical! This first book perfectly sets up the entire series. Loved every page.',
    date: '2024-02-08',
    helpful: 89,
  },
  {
    id: '4',
    bookId: '16',
    userName: 'Neha P.',
    rating: 5,
    title: 'Epic sci-fi masterpiece',
    comment: 'Dune is an incredible world-building achievement. Complex characters, intricate politics, and amazing imagery. Highly recommended!',
    date: '2024-02-05',
    helpful: 67,
  },
];