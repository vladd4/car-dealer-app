import React from 'react';

export default function Loader() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-brand-blue"></div>
    </div>
  );
}
