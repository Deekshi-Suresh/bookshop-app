import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Book } from '../data/books';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { useCart } from '../contexts/CartContext';
import { useReview } from '../contexts/ReviewContext';
import { toast } from 'sonner';
import { formatINR, convertToINR } from '../lib/currency';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const { addToCart } = useCart();
  const { getAverageRating } = useReview();
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('bookshop_wishlist') || '[]');
    setIsInWishlist(wishlist.includes(book.id));
  }, [book.id]);

  const handleAddToCart = () => {
    addToCart(book);
    toast.success(`"${book.title}" added to cart`);
  };

  const handleWishlistToggle = () => {
    const wishlist = JSON.parse(localStorage.getItem('bookshop_wishlist') || '[]');
    if (isInWishlist) {
      const updated = wishlist.filter((id: string) => id !== book.id);
      localStorage.setItem('bookshop_wishlist', JSON.stringify(updated));
      setIsInWishlist(false);
      toast.success('Removed from wishlist');
    } else {
      wishlist.push(book.id);
      localStorage.setItem('bookshop_wishlist', JSON.stringify(wishlist));
      setIsInWishlist(true);
      toast.success('Added to wishlist');
    }
  };

  const avgRating = getAverageRating(book.id) || book.rating;

  return (
    <Card className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow relative group">
      <Link to={`/book/${book.id}`} className="absolute inset-0 z-10" />
      
      <button
        onClick={(e) => {
          e.preventDefault();
          handleWishlistToggle();
        }}
        className="absolute top-3 right-3 z-20 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all"
      >
        <Heart
          className={`h-5 w-5 transition-colors ${
            isInWishlist
              ? 'fill-red-500 text-red-500'
              : 'text-gray-400 hover:text-red-500'
          }`}
        />
      </button>

      <div className="aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <CardContent className="flex-1 p-4">
        <Badge variant="secondary" className="mb-2">
          {book.category}
        </Badge>
        <h3 className="font-semibold line-clamp-2 mb-1">{book.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{book.author}</p>
        <p className="text-sm text-gray-500 line-clamp-2 mb-3">{book.description}</p>
        <div className="flex items-center gap-1 mb-2">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{avgRating}</span>
        </div>
        <div className="text-xl font-bold text-blue-600">₹{formatINR(convertToINR(book.price))}</div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={(e) => {
            e.preventDefault();
            handleAddToCart();
          }}
          className="w-full relative z-20"
          disabled={!book.inStock}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {book.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </CardFooter>
    </Card>
  );
}