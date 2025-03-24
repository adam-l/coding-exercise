import { AssetsGrid } from '@/components/AssetsGrid';

export default function Page() {
  return (
    <>
      <section>
        <header className="my-8">
          <h2 className="text-3xl font-semibold">Featured</h2>
          <p className="text-gray-500">Curated top picks from this week</p>
        </header>
        <AssetsGrid isHighlighted={true} />
      </section>
      <section>
        <header className="my-8">
          <h2 className="text-3xl font-semibold">Trending</h2>
          <p className="text-gray-500">Most popular by community</p>
        </header>
        <AssetsGrid />
      </section>
    </>
  );
}
