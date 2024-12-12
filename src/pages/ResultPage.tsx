import React from 'react';

import { getYearArray } from '@/utils/getYearArray';

import { getAllMakes, getVehicles } from '@/http/carController';

export async function generateStaticParams() {
  const makes = await getAllMakes();
  const years = getYearArray();

  return (
    makes &&
    makes.flatMap((makeId) =>
      years.map((year) => ({
        makeId: makeId.toString(),
        year: year.toString(),
      })),
    )
  );
}

export default async function ResultPage({
  makeId,
  year,
}: {
  makeId: string;
  year: string;
}) {
  const models = await getVehicles(makeId, year);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-brand-blue">
          Vehicle Models for Year {year}
        </h1>

        {models && models.length === 0 ? (
          <p className="text-gray-600">No models found for the selected make and year.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {models &&
              models.map((model) => (
                <div
                  key={model.Model_ID}
                  className="bg-gray-50 p-4 rounded-md shadow-sm hover:bg-gray-100 transition-colors"
                >
                  <h2 className="font-semibold text-brand-gray">{model.Model_Name}</h2>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
