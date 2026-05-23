import { useMutation } from '@tanstack/react-query';
import { register } from '../api/auth.api';
import { toast } from '../utils/toast';
import { useNavigate } from 'react-router-dom';

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: register,
    onSuccess: (response) => {
      toast.success(response.message || 'Registered successfully. Please login.');
      navigate('/login');
    },
    onError: (error) => {
      const message = error?.response?.data?.message || 'Failed to register';
      toast.error(message);
    },
  });
};
