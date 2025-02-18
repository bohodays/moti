import { useEffect, useState } from 'react';

export const ErrorAfter2s = () => {
  const [asyncState, setAsyncState] = useState<{ isError: true; error: Error } | { isError: false; error: null }>({
    isError: false,
    error: null,
  });

  useEffect(() => {
    setTimeout(() => {
      setAsyncState({ isError: true, error: new Error('error made by Error') });
    }, 2000);
  }, []);

  if (asyncState.isError) {
    throw asyncState.error;
  }

  return <>No error</>;
};
