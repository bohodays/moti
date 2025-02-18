import axiosInstance from './axiosInstance';

export const getPenaltyAll = async () => {
  try {
    const response = await axiosInstance.get('/api/v1/penalty/all');
    return response;
  } catch (error) {
    console.error(error);
    throw new Error('api error');
  }
};
