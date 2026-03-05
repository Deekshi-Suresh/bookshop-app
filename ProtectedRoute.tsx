import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router';

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();
  const user = localStorage.getItem('bookshop_user');

  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true });
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  return <>{children}</>;
}