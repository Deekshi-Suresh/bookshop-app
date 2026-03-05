import { useState } from 'react';
import { useReview } from '../contexts/ReviewContext';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Star } from 'lucide-react';
import { toast } from 'sonner';

interface ReviewFormProps {
  bookId: string;
  bookTitle: string;
  onClose: () => void;
}

export function ReviewForm({ bookId, bookTitle, onClose }: ReviewFormProps) {
  const { addReview } = useReview();
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!userName.trim()) {
      toast.error('Please enter your name');
      return;
    }
    if (!title.trim()) {
      toast.error('Please enter a review title');
      return;
    }
    if (!comment.trim()) {
      toast.error('Please enter your review');
      return;
    }

    setLoading(true);
    // Simulate submission delay
    setTimeout(() => {
      addReview(bookId, userName, rating, title, comment);
      toast.success('Review posted successfully!');
      setLoading(false);
      onClose();
    }, 500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle>Write a Review for "{bookTitle}"</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Your Name</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Rating */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    type="button"
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    onClick={() => setRating(star)}
                    className="transition-colors"
                  >
                    <Star
                      className={`h-8 w-8 ${
                        (hoveredRating || rating) >= star
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {rating} out of 5 stars
              </p>
            </div>

            {/* Title */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Review Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Summarize your review in a few words"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Comment */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Your Review</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your thoughts about this book..."
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                {comment.length}/500 characters
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 justify-end pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {loading ? 'Posting...' : 'Post Review'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}