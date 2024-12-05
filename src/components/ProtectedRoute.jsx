"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const ProtectedRoute = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Check both NextAuth session and local storage
    const localUser = localStorage.getItem('user');
    
    // If loading, do nothing
    if (status === 'loading') {
      return;
    }

    // If no session and no local user, redirect to login
    if (!session && !localUser) {
      router.push('/login');
    }
  }, [session, status, router]);

  // Show children only if there's a session or local user
  if (status === 'loading') {
    return <div>Loading...</div>; // Optional loading state
  }

  if (!session && !localStorage.getItem('user')) {
    return null; // or a loading/redirect indicator
  }

  return children;
};

export default ProtectedRoute;