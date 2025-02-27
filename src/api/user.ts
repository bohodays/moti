import { invitationState } from '@store/invitationStore';
import axiosInstance from './axiosInstance';

export const getPenaltyAll = async () => {
  try {
    const response = await axiosInstance.get('/v1/penalty/all');
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('api error');
  }
};

export const getRandomNickname = async () => {
  try {
    const response = await axiosInstance.get('/v1/nickname');
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('api error');
  }
};

export const getMajorCategoryAll = async () => {
  try {
    const response = await axiosInstance.get('/v1/major-category/all');
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('api error');
  }
};

export const getMajorCategoryInfo = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/v1/major-category/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('api error');
  }
};

export const getMinorCategoryInfo = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/v1/minor-category/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('api error');
  }
};

export const getPenaltyInfo = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/v1/penalty/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('api error');
  }
};

export const postInvitation = async (invitationInfo: invitationState) => {
  try {
    const response = await axiosInstance.post('/v1/invitation', invitationInfo);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('api error');
  }
};

export const getInvitationInfo = async (uuid: string) => {
  try {
    const response = await axiosInstance.get(`/v1/invitation/${uuid}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('api error');
  }
};
