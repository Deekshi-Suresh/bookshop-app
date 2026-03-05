import { useState } from 'react';
import { useReview } from '../contexts/ReviewContext';
import { ReviewForm } from './ReviewForm';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Star, ThumbsUp } from 'lucide-react';

interface ReviewsSectionProps {
  bookId: string;
  bookTitle: string;
}

export function ReviewsSection({ bookId, bookTitle }: ReviewsSectionProps) {
  const { getBookReviews, markHelpful } = useReview();
  const [showForm, setShowForm] = useState(false);
  const [markedHelpful, setMarkedHelpful] = useState<string[]>([]);

  const reviews = getBookReviews(bookId);

  const handleMarkHelpful = (reviewId: string) => {
    if (!markedHelpful.includes(reviewId)) {
      markHelpful(reviewId);
      setMarkedHelpful([...markedHelpful, reviewId]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        <Button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Write a Review
        </Button>
      </div>

      {/* Review Form Modal */}
      {showForm && (
        <ReviewForm
          bookId={bookId}
          bookTitle={bookTitle}
          onClose={() => setShowForm(false)}
        />
      )}

      {/* Reviews List */}
      {reviews.length > 0 ? (
        <div className="space-y-4">
          {reviews.map(review => (
            <Card key={review.id}>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold">{review.userName}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map(star => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${
                                star <= review.rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">{review.rating}.0</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>

                  {/* Title and Comment */}
                  <div>
                    <p className="font-semibold text-gray-900">{review.title}</p>
                    <p className="text-gray-700 mt-2">{review.comment}</p>
                  </div>

                  {/* Helpful Button */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleMarkHelpful(review.id)}
                      disabled={markedHelpful.includes(review.id)}
                      className={`flex items-center gap-2 text-sm ${
                        markedHelpful.includes(review.id)
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'text-gray-600 hover:text-blue-600 transition-colors'
                      }`}
                    >
                      <ThumbsUp className="h-4 w-4" />
                      Helpful ({review.helpful})
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-gray-600 mb-4">No reviews yet. Be the first to review!</p>
            <Button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Write the First Review
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}