import { useMutation } from '@tanstack/react-query';
import { login } from '../api/auth.api';
import { useAuth } from './useAuth';
import { setTokens, setUser } from '../utils/storage';
import { toast } from '../utils/toast';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const { loginContext } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      const { accessToken, refreshToken, user } = response.data;
      setTokens(accessToken, refreshToken);
      setUser(user);
      loginContext(user);
      
      toast.success(response.message || 'Logged in successfully');
      
      if (!user.role) {
        navigate('/complete-profile');
      } else if (user.role === 'business') {
        navigate('/business/dashboard');
      } else {
        navigate('/student/dashboard');
      }
    },
    onError: (error) => {
      const message = error?.response?.data?.message || 'Failed to login';
      toast.error(message);
    },
  });
};
