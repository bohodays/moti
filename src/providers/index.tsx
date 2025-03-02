import { ErrorBoundary, ErrorBoundaryFallbackProps, Suspense } from '@suspensive/react';
import { ToastContainer } from 'react-toastify';
import { StrictPropsWithChildren } from 'src/types/common';
import QueryProvider from './QueryProvider';

const ErrorBoundaryFallback = ({ reset, error }: ErrorBoundaryFallbackProps) => (
  <>
    <button onClick={reset}>reset</button>
    <h1>{error.message}</h1>
  </>
);

const Providers = ({ children }: StrictPropsWithChildren) => {
  return (
    <QueryProvider>
      <ErrorBoundary fallback={ErrorBoundaryFallback}>
        <Suspense>
          <ToastContainer position="top-center" limit={1} theme="dark" closeButton={false} autoClose={5000} />
          {children}
        </Suspense>
      </ErrorBoundary>
    </QueryProvider>
  );
};

export default Providers;
