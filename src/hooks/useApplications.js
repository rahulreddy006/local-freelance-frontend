import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { applyToGig, getMyApplications, getGigApplications, updateApplicationStatus } from '../api/applications.api';
import { toast } from '../utils/toast';
import { useAuth } from './useAuth';

export const useApplyGig = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: applyToGig,
    onSuccess: (response) => {
      toast.success(response.message || 'Applied successfully!');
      queryClient.invalidateQueries({ queryKey: ['my-applications'] });
    },
    onError: (error) => {
      const message = error?.response?.data?.message || 'Failed to apply';
      toast.error(message);
    },
  });
};

export const useMyApplications = () => {
 const { isAuthenticated, isLoading } = useAuth();

return useQuery({
   queryKey: ['my-applications'],
   queryFn: getMyApplications,
   enabled: !isLoading && isAuthenticated,
});
};

export const useGigApplications = (gigId) => {
  const { isAuthenticated, isLoading,user } = useAuth();
  return useQuery({
    queryKey: ['applications', gigId],
    queryFn: () => getGigApplications(gigId),
    enabled: !!gigId && !isLoading && isAuthenticated &&
  user?.role === 'business',
  });
};

export const useApplicationStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateApplicationStatus,
    onSuccess: (response, variables) => {
      toast.success(response.message || 'Status updated successfully');
      // Invalidate relevant queries
      queryClient.invalidateQueries({ queryKey: ['applications'] });
    },
    onError: (error) => {
      const message = error?.response?.data?.message || 'Failed to update status';
      toast.error(message);
    },
  });
};
