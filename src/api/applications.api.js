import { api } from './axios';

export const applyToGig = async ({ gigId, proposal }) => {
  const response = await api.post(`/gigs/${gigId}/apply`, { proposal });
  return response.data;
};

export const getMyApplications = async () => {
  const response = await api.get('/my-applications');
  return response.data;
};

export const getGigApplications = async (gigId) => {
  const response = await api.get(`/gigs/${gigId}/applications`);
  return response.data;
};

export const updateApplicationStatus = async ({ applicationId, status }) => {
  const response = await api.patch(`/applications/${applicationId}/status`, { status });
  return response.data;
};
