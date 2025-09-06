import { useState } from 'react';
import { DEFAULT_FILTERS } from '../../constants';

export const useFilters = () => {
  const [filterSettings, setFilterSettings] = useState(DEFAULT_FILTERS);

  const handleFilterChange = (newFilterSettings) => {
    setFilterSettings(newFilterSettings);
  };

  const resetAllFilters = () => {
    setFilterSettings(DEFAULT_FILTERS);
  };

  return {
    filterSettings,
    handleFilterChange,
    resetAllFilters
  };
};
