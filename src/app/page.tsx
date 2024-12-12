import { Suspense } from 'react';

import Loader from '@/components/Loader';

import FilterPage from '@/pages/FilterPage';

export default async function page() {
  return (
    <Suspense fallback={<Loader />}>
      <FilterPage />
    </Suspense>
  );
}
