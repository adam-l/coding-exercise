'use client';
import { useFilter } from '@/context/FilterContext';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export const Filter: React.FC = (): React.JSX.Element => {
  const { filter, setFilter } = useFilter();
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <div className="relative">
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      <input
        className="w-full bg-white px-4 pl-10 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        type="text"
        placeholder="Type to search..."
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  )
};