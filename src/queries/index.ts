import { authMutations, authQueries } from './auth';

export const mutations = {
  auth: authMutations,
} as const;

export const queries = {
  auth: authQueries,
} as const;
