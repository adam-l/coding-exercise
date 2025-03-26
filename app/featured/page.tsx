'use client';
import { NextPage } from 'next';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { AssetsGrid } from '@/components/AssetsGrid';
import { AssetModal } from '@/components/AssetModal';
import { IAsset } from '@/models/asset.model';

const Page: NextPage = () => {
  const router = useRouter();
  const [isAssetModalOpen, setIsAssetModalOpen] = useState(false);
  const [assets, setAssets] = useState<IAsset[]>([]);
  const [selectedAsset, setSelectedAsset] = useState<IAsset|null>(null);
  const assetId = useSearchParams().get('assetId');
  const onGridItemClick = (assetId: string): void => {
    router.push(`/featured?assetId=${assetId}`);
  };
  const onModalClose: () => void = (): void => {
    setIsAssetModalOpen(false);
    setSelectedAsset(null);
    router.push(`/featured`);
  };

  useEffect((): void => {
    const fetchItems = async () => {
      const res = await fetch('/api/assets');
      const assets: [] = await res.json();
      let selectedAsset: IAsset | undefined;
      setAssets(assets);

      if (!assetId || !assets) {
        return;
      }
  
      selectedAsset = assets.find((asset: IAsset): boolean => asset.id === assetId);
  
      if (selectedAsset) {
        setIsAssetModalOpen(true);
        setSelectedAsset(selectedAsset);
      }
    };
    fetchItems();
  }, [assetId]);

  return (
    <>
      <section>
        <header className="my-8">
          <h2 className="text-3xl font-semibold">Featured</h2>
          <p className="text-gray-500">Curated top picks from this week</p>
        </header>
        { assets && <AssetsGrid assets={assets} isHighlighted={true} onGridItemClick={ onGridItemClick } /> }
      </section>
      <section>
        <header className="my-8">
          <h2 className="text-3xl font-semibold">Trending</h2>
          <p className="text-gray-500">Most popular by community</p>
        </header>
        { assets && <AssetsGrid assets={assets} onGridItemClick={ onGridItemClick } /> }
      </section>
      {isAssetModalOpen && <AssetModal item={selectedAsset} onClose={(): void => onModalClose()} />}
    </>
  );
}

export default Page;