import authKeys from './keys';

export const authQueries = {
  login: {
    queryKey: authKeys.login,
    //queryFn: () => apis.auth.login(),
  },
} as const;
