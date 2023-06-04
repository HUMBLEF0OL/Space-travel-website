import React, { lazy, Suspense } from 'react';

const LazyTechnology = lazy(() => import('./Technology'));

const Technology = props => (
  <Suspense fallback={null}>
    <LazyTechnology {...props} />
  </Suspense>
);

export default Technology;
