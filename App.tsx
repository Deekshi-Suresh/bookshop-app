import { RouterProvider } from 'react-router';
import { router } from './routes.tsx';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <RouterProvider router={router} />
          <Toaster />
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}