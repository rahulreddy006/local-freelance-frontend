import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getGigs, getGigById, createGig, getMyGigs } from '../api/gigs.api';
import { toast } from '../utils/toast';
import { useAuth } from './useAuth';
export const useGigs = (params) => {
  return useQuery({
    queryKey: ['gigs', params],
    queryFn: () => getGigs(params),
    keepPreviousData: true,
  });
};

export const useGigDetails = (gigId) => {
  return useQuery({
    queryKey: ['gig', gigId],
    queryFn: () => getGigById(gigId),
    enabled: !!gigId,
  });
};

export const useMyGigs = () => {
  const { isAuthenticated, isLoading,user } = useAuth();
  return useQuery({
    queryKey: ['my-gigs'],
    queryFn: getMyGigs,
    enabled: !isLoading && isAuthenticated &&
      user?.role === 'business',
  });
};

export const useCreateGig = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createGig,
    onSuccess: (response) => {
      toast.success(response.message || 'Gig created successfully!');
      queryClient.invalidateQueries({ queryKey: ['gigs'] });
      queryClient.invalidateQueries({ queryKey: ['my-gigs'] });
    },
    onError: (error) => {
      const message = error?.response?.data?.message || 'Failed to create gig';
      toast.error(message);
    },
  });
};
