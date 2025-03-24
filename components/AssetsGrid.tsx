'use client';
import React from 'react';
import { ClockIcon } from '@heroicons/react/24/outline';
import { TimeFormatter } from './TimeFormatter';

interface IAsset {
  id: string,
  name: string,
  description: string,
  time?: string
}

interface ChildProps {
  isHighlighted?: boolean;
  assets: Array<IAsset>
}

export const AssetsGrid: React.FC<ChildProps> = ({ isHighlighted }) => {
  const assets: Array<IAsset> = [
    {
      id: 'item00',
      name: 'Item Name',
      description: 'Short description of the item goes nicely here.',
      time: '2024-27-06',
    },
    {
      id: 'item01',
      name: 'Item Name',
      description: 'Short description of the item goes nicely here.',
      time: '2024-27-06',
    },
    {
      id: 'item02',
      name: 'Item Name',
      description: 'Short description of the item goes nicely here.',
      time: '2024-27-06',
    },
    {
      id: 'item03',
      name: 'Item Name',
      description: 'Short description of the item goes nicely here.',
      time: '2024-27-06',
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {assets.map((asset: IAsset): React.JSX.Element => (
        <div key={asset.id}
             className={`p-4 grid grid-cols-3 gap-4 rounded flex ${isHighlighted ? 'bg-white border border-gray-200' : null}`}>
          <div className="col-span-1 rounded flex items-center justify-center bg-gray-200">
            <ClockIcon className="size-16 text-gray-500" />
          </div>
          <div className="col-span-2 pl-2 flex flex-col justify-center h-full">
            <p><em className="font-semibold not-italic text-gray-900">{ asset.name }</em></p>
            <p className="mt-2 text-gray-900">Short description of the item goes nicely here.</p>
            { asset.time && <div className="mt-2"><TimeFormatter time={ asset.time } /></div> }
          </div>
        </div>
      ))}
    </div>
  );
}
