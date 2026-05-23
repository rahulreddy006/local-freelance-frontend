import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { toast } from '../../utils/toast';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';

const OAuthSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { loginWithTokens } = useAuth();
  const [status, setStatus] = useState('loading'); // 'loading' | 'success' | 'error'
  const [message, setMessage] = useState('Signing you in...');

  useEffect(() => {
    const handleOAuth = async () => {
      const accessToken = searchParams.get('accessToken');
      const refreshToken = searchParams.get('refreshToken');

      // Validate tokens exist
      if (!accessToken || !refreshToken) {
        setStatus('error');
        setMessage('Authentication failed. Missing credentials.');
        toast.error('OAuth login failed. Please try again.');
        setTimeout(() => navigate('/login'), 2500);
        return;
      }

      try {
        // Store tokens and fetch/decode user data
        const userData = await loginWithTokens(accessToken, refreshToken);

        setStatus('success');
        setMessage('Welcome! Redirecting...');
        toast.success('Signed in successfully!');

        // Short delay for the success animation to play
        setTimeout(() => {
          // Use actual user state as source of truth, not URL params
          // Check if user has completed onboarding (has role + isOnboarded flag)
          if (!userData?.role || userData?.isOnboarded === false) {
            navigate('/complete-profile', { replace: true });
          } else if (userData.role === 'business') {
            navigate('/business/dashboard', { replace: true });
          } else {
            navigate('/student/dashboard', { replace: true });
          }
        }, 1200);
      } catch (error) {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
        toast.error('Failed to complete sign-in.');
        setTimeout(() => navigate('/login'), 2500);
      }
    };

    handleOAuth();
  }, []); // Run once on mount

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background p-4">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-sm"
      >
        <div className="rounded-2xl border bg-card p-8 shadow-xl text-center space-y-6">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
            </div>
          </div>

          {/* Status Icon */}
          <div className="flex justify-center">
            {status === 'loading' && (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              >
                <Loader2 className="h-10 w-10 text-primary" />
              </motion.div>
            )}
            {status === 'success' && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 12 }}
              >
                <CheckCircle className="h-10 w-10 text-emerald-500" />
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 12 }}
              >
                <XCircle className="h-10 w-10 text-destructive" />
              </motion.div>
            )}
          </div>

          {/* Message */}
          <motion.div
            key={message}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-lg font-semibold text-foreground">{message}</h2>
            <p className="text-sm text-muted-foreground mt-2">
              {status === 'loading' && 'Please wait while we set up your session.'}
              {status === 'success' && 'Taking you to your dashboard.'}
              {status === 'error' && 'Redirecting you back to login.'}
            </p>
          </motion.div>

          {/* Progress bar */}
          {status === 'loading' && (
            <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '80%' }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
            </div>
          )}
          {status === 'success' && (
            <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-emerald-500 rounded-full"
                initial={{ width: '80%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default OAuthSuccessPage;
