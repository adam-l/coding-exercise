'use client';
import React, { ReactNode } from 'react';
import { ClockIcon } from '@heroicons/react/24/outline';
import { TimeFormatter } from '@/components/TimeFormatter';
import { IAsset } from '@/models/asset.model';
import { useFilter } from '@/context/FilterContext';

interface ChildProps {
  isHighlighted?: boolean;
  assets: Array<IAsset>
  onGridItemClick: (assetId: string) => void;
}

export const AssetsGrid: React.FC<ChildProps> = ({ assets, isHighlighted, onGridItemClick }): ReactNode => {
  const { filter } = useFilter();
  const filterCaseInsenstive: string = filter.toLocaleLowerCase();

  return (
    <div className="grid grid-cols-2 gap-6">
      {assets.map((asset: IAsset): React.JSX.Element => (
        <div key={asset.id}>
          {(asset.name.toLocaleLowerCase().indexOf(filterCaseInsenstive) === -1 && filterCaseInsenstive !== '') ? (
            null
          ) : (
            <div
                className={`cursor-pointer p-4 grid grid-cols-3 gap-4 rounded flex ${isHighlighted ? 'bg-white border border-gray-200' : null}`}
                onClick={(event: React.MouseEvent) => {
                event.preventDefault();
                onGridItemClick(asset.id);
              } }>
              <div className="col-span-1 rounded flex items-center justify-center bg-gray-200">
                <ClockIcon className="size-16 text-gray-500" />
              </div>
              <div className="col-span-2 pl-2 flex flex-col justify-center h-full">
                <p><em className="font-semibold not-italic text-gray-900">{ asset.name }</em></p>
                <p className="mt-2 text-gray-900">{ asset.description }</p>
                { asset.time && <div className="mt-2"><TimeFormatter time={ asset.time } /></div> }
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
