import React from 'react';

interface Make {
  MakeId: number;
  MakeName: string;
}

interface MakeSelectorProps {
  makes: Make[];
  selectedMake: number | null;
  onMakeChange: (makeId: number) => void;
}

export default function MakeSelector({
  makes,
  selectedMake,
  onMakeChange,
}: MakeSelectorProps) {
  return (
    <div className="mb-4">
      <label
        htmlFor="make-select"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Select Vehicle Make
      </label>
      <select
        id="make-select"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
        value={selectedMake || ''}
        onChange={(e) => onMakeChange(Number(e.target.value))}
      >
        <option value="">Select a Make</option>
        {makes.map((make) => (
          <option key={make.MakeId} value={make.MakeId}>
            {make.MakeName}
          </option>
        ))}
      </select>
    </div>
  );
}
