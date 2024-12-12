import React from 'react';

import { getYearArray } from '@/utils/getYearArray';

interface YearSelectorProps {
  selectedYear: number | null;
  onYearChange: (year: number) => void;
}

export default function YearSelector({ selectedYear, onYearChange }: YearSelectorProps) {
  const years = getYearArray();

  return (
    <div className="mb-6">
      <label
        htmlFor="year-select"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Select Model Year
      </label>
      <select
        id="year-select"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
        value={selectedYear || ''}
        onChange={(e) => onYearChange(Number(e.target.value))}
      >
        <option value="">Select a Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}
