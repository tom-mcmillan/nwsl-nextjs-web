"use client";

import { useEffect, useCallback } from 'react';

interface GoogleCredentialResponse {
  credential: string;
  select_by?: string;
}

interface GoogleAuthButtonProps {
  onSuccess: (credential: GoogleCredentialResponse) => void;
  onError?: () => void;
  text?: string;
  disabled?: boolean;
}

export default function GoogleAuthButton({ 
  onSuccess, 
  onError, 
  text = "Continue with Google",
  disabled = false 
}: GoogleAuthButtonProps) {
  
  const handleCredentialResponse = useCallback((response: GoogleCredentialResponse) => {
    try {
      // Decode the JWT token to get user info
      const payload = response.credential.split('.')[1];
      const userInfo = JSON.parse(atob(payload));
      
      // Redirect to platform with user info
      const redirectUrl = `https://platform.nwsldata.com?auth=success&email=${encodeURIComponent(userInfo.email)}&name=${encodeURIComponent(userInfo.name)}`;
      window.location.href = redirectUrl;
      
      onSuccess(response);
    } catch (error) {
      console.error('Google auth error:', error);
      if (onError) onError();
    }
  }, [onSuccess, onError]);
  
  useEffect(() => {
    // Load Google Identity Services
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '78453984015-hor607tamnavuh9ggp4qcoqs22oscf7r.apps.googleusercontent.com',
          callback: handleCredentialResponse,
        });
      }
    };
    
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [handleCredentialResponse]);

  const handleClick = () => {
    if (window.google) {
      window.google.accounts.id.prompt();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className="w-full py-3 px-4 border border-gray-300 rounded-full hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-base font-medium"
    >
      <svg width="18" height="18" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
      {disabled ? 'Signing in...' : text}
    </button>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    google: {
      accounts: {
        id: {
          initialize: (config: { client_id: string; callback: (response: GoogleCredentialResponse) => void }) => void;
          prompt: () => void;
        };
      };
    };
  }
}