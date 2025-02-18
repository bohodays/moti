import { ErrorBoundary, ErrorBoundaryFallbackProps, Suspense } from '@suspensive/react';
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
        <Suspense>{children}</Suspense>
      </ErrorBoundary>
    </QueryProvider>
  );
};

export default Providers;
