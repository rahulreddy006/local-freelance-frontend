import { api } from './axios';

export const getGigs = async (params) => {
  // Strip empty/falsy params so the backend doesn't receive e.g. search=""
  const cleanParams = Object.fromEntries(
    Object.entries(params).filter(([_, v]) => v !== '' && v != null)
  );
  const response = await api.get('/gigs', { params: cleanParams });
  return response.data;
};

export const getGigById = async (gigId) => {
  const response = await api.get(`/gigs/${gigId}`);
  return response.data;
};

export const createGig = async (gigData) => {
  const response = await api.post('/gigs', gigData);
  return response.data;
};

export const getMyGigs = async () => {
  const response = await api.get('/my-gigs');
  return response.data;
};
