'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface IFilterContextType {
  filter: string;
  setFilter: (value: string) => void;
}

const defaultContextValue: IFilterContextType = {
  filter: '',
  setFilter: () => {},
};

const FilterContext: React.Context<IFilterContextType> = createContext<IFilterContextType>(defaultContextValue);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [filter, setFilter] = useState<string>('');

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = (): IFilterContextType => {
  return useContext(FilterContext);
};