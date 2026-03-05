import { Link, useNavigate } from 'react-router';
import { ShoppingCart, BookOpen, LogOut, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Header() {
  const { user, logout, isAuthenticated } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <span className="font-semibold text-xl">BookShop</span>
          </Link>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-600">{user?.name}</span>
            </div>

            <Link to="/cart">
              <Button variant="outline" size="sm" className="relative">
                <ShoppingCart className="h-4 w-4" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>

            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}