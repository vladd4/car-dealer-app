import { Suspense } from 'react';

import Loader from '@/components/Loader';

import ResultPage from '@/pages/ResultPage';

interface Params {
  makeId: string;
  year: string;
}

export default async function Car({ params }: { params: Params }) {
  const { makeId, year } = await params;
  return (
    <Suspense fallback={<Loader />}>
      <ResultPage makeId={makeId} year={year} />
    </Suspense>
  );
}
