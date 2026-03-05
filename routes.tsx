import { createBrowserRouter } from 'react-router';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderConfirmationPage } from './pages/OrderConfirmationPage';
import { WishlistPage } from './pages/WishlistPage';
import { BookDetailsPage } from './pages/BookDetailsPage';
import { ProtectedRoute } from './components/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: LoginPage,
  },
  {
    path: '/login',
    Component: LoginPage,
  },
  {
    path: '/dashboard',
    Component: () => (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/book/:bookId',
    Component: () => (
      <ProtectedRoute>
        <BookDetailsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/cart',
    Component: () => (
      <ProtectedRoute>
        <CartPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/checkout',
    Component: () => (
      <ProtectedRoute>
        <CheckoutPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/order-confirmation',
    Component: () => (
      <ProtectedRoute>
        <OrderConfirmationPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/wishlist',
    Component: () => (
      <ProtectedRoute>
        <WishlistPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    Component: LoginPage,
  },
]);