'use client';
import React, { ReactNode } from 'react';
import { ClipboardIcon, RectangleGroupIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { IQuestion } from '@/models/question.model';

interface ChildProps {
  item: any;
  onClose: (event: React.MouseEvent) => void;
}

const copyToClipboard = async (): Promise<void> => {
  await navigator.clipboard.writeText(window.location.href);
};

export const AssetModal: React.FC<ChildProps> = ({ item, onClose }): ReactNode => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="bg-white rounded shadow p-5 max-w-[900px] w-full">
        <div className="max-h-[90vh] overflow-y-auto">
          <div className="flex space-x-4 justify-end">
            <ClipboardIcon className="cursor-pointer size-5 text-gray-500"
                           onClick={(event: React.MouseEvent): void => { copyToClipboard() }} />
            <XMarkIcon onClick={(event: React.MouseEvent): void => { onClose(event) } }
                       className="cursor-pointer size-5 text-gray-500" />
          </div>

          <div className="flex justify-center items-center">
            <div className="bg-gray-100 p-4 rounded">
              <RectangleGroupIcon className="h-9 w-9 text-gray-500" />
            </div>
          </div>

          <header>
            <div className="flex justify-center items-center">
              <h2 className="inline-block text-3xl font-bold my-2 text-center">{ item.name }</h2>
              <span className="mx-2 rounded inline-block px-1 bg-gray-100 text-gray-500 my-2 text-center">Layout</span>
            </div>
            <p className="text-center text-gray-500">{ item.description }</p>
          </header>

          <p className="my-6 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui veritatis maiores reprehenderit atque nulla voluptatem perspiciatis temporibus blanditiis</p>

          { item.tags && <ul className="text-center">
            { item.tags.map((tag: string): React.ReactNode => {
              return <li key={tag} className="inline-block bg-gray-100 border rounded mx-1 px-2 border-gray-400 text-gray-500">#{ tag }</li> 
            })}
          </ul> }

          <div className="grid grid-cols-4">
            <div className="flex flex-col items-center p-4 border-r border-gray-300">
              <p className="font-bold">2485</p>
              <p className="text-gray-500">Used</p>
            </div>
            <div className="flex flex-col items-center p-4 border-r border-gray-300">
              <p className="font-bold">Universal</p>
              <p className="text-gray-500">Type</p>
            </div>
            <div className="flex flex-col items-center p-4 border-r border-gray-300">
              <p className="font-bold">6</p>
              <p className="text-gray-500">Pages No.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <p className="font-bold">07/23/2024</p>
              <p className="text-gray-500">Last Updated</p>
            </div>
          </div>

          <div className="my-5 w-full h-60 bg-gray-100 flex justify-center items-center text-grey-400">Chart</div>

          { item.questions?.length && <section className="mt-10">
            <h3 className="font-semibold text-2xl">Business Questions</h3> 
            <div className="mt-4 grid grid-cols-2">
              {item.questions.map((question: IQuestion): React.JSX.Element => (
                <div key={question.id} className="p-4 rounded mb-3 mr-3">
                  <h4 className="font-semibold text-gray-900">{ question.name }</h4>
                  <p className="text-gray-900">{ question.description }</p>
                </div>
              ))}
            </div>
          </section> }
        </div>
      </div>
    </div>
  );
}
