'use client';

import Loader from '../components/Loader';
import MakeSelector from '../components/MakeSelector';
import NextButton from '../components/NextButton';
import YearSelector from '../components/YearSelector';

import React, { useState } from 'react';

import useCarMakes from '@/hooks/useCarMakes';

export default function FilterPage() {
  const [selectedMake, setSelectedMake] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const { data, isLoading } = useCarMakes();

  if (isLoading) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-brand-blue">
          Car Dealer Filter
        </h1>
        <MakeSelector
          makes={data || []}
          selectedMake={selectedMake}
          onMakeChange={setSelectedMake}
        />
        <YearSelector selectedYear={selectedYear} onYearChange={setSelectedYear} />
        <NextButton selectedMake={selectedMake} selectedYear={selectedYear} />
      </div>
    </div>
  );
}
