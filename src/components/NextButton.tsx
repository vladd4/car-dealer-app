import React from 'react';

import Link from 'next/link';

interface NextButtonProps {
  selectedMake: number | null;
  selectedYear: number | null;
}

export default function NextButton({ selectedMake, selectedYear }: NextButtonProps) {
  return (
    <Link
      href={
        selectedMake && selectedYear ? `/result/${selectedMake}/${selectedYear}` : '#'
      }
    >
      <button
        disabled={!selectedMake || !selectedYear}
        className={`w-full py-2 rounded-md transition-colors duration-300 ${
          selectedMake && selectedYear
            ? 'bg-blue-500 text-white hover:bg-blue-700'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Next
      </button>
    </Link>
  );
}
