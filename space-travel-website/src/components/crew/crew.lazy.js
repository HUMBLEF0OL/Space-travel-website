import React, { lazy, Suspense } from 'react';

const LazyCrew = lazy(() => import('./Crew'));

const Crew = props => (
  <Suspense fallback={null}>
    <LazyCrew {...props} />
  </Suspense>
);

export default Crew;
