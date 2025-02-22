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

export const getRandomNickname = async () => {
  try {
    const response = await axiosInstance.get('/api/v1/nickname');
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('api error');
  }
};

export const getMajorCategoryAll = async () => {
  try {
    const response = await axiosInstance.get('/api/v1/major-category/all');
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('api error');
  }
};

export const getMajorCategoryInfo = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/api/v1/major-category/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('api error');
  }
};

export const getMinorCategoryInfo = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/api/v1/minor-category/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('api error');
  }
};
