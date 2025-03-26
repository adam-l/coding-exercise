import { IAsset } from "@/models/asset.model";

export async function GET() {
  const assets: Array<IAsset> = [
    {
      id: 'item00',
      name: 'Item Name',
      description: 'Short description of the item goes nicely here.',
      time: '2024-27-06',
      tags: ['comms', 'coverage', 'stakeholders'],
      questions: [
        {
          id: 'q-1',
          name: 'Question 1',
          description: 'Short description of the item goes nicely here.',
        },
        {
          id: 'q-2',
          name: 'Question 2',
          description: 'Short description of the item goes nicely here.',
        },
        {
          id: 'q-3',
          name: 'Question 3',
          description: 'Short description of the item goes nicely here.',
        },
        {
          id: 'q-4',
          name: 'Question 4',
          description: 'Short description of the item goes nicely here.',
        },
      ]
    },
    {
      id: 'item01',
      name: 'Item Name',
      description: 'Short description of the item goes nicely here.',
      time: '2024-27-06',
      questions: [
        {
          id: 'q-1',
          name: 'Question 1',
          description: 'Short description of the item goes nicely here.',
        },
        {
          id: 'q-2',
          name: 'Question 2',
          description: 'Short description of the item goes nicely here.',
        },
        {
          id: 'q-3',
          name: 'Question 3',
          description: 'Short description of the item goes nicely here.',
        },
        {
          id: 'q-4',
          name: 'Question 4',
          description: 'Short description of the item goes nicely here.',
        },
      ]
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
  return new Response(JSON.stringify(assets), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}