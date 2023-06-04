import React, { lazy, Suspense } from 'react';

const LazyDestination = lazy(() => import('./Destination'));

const Destination = props => (
  <Suspense fallback={null}>
    <LazyDestination {...props} />
  </Suspense>
);

export default Destination;
