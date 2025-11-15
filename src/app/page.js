import ProductsPage from '@/components/products';

export default function Home() {
  return (
    <div className="min-h-screen py-10 sm:py-20 md:py-12 flex items-center justify-center bg-gray-50">
      <ProductsPage />
    </div>
  );
}
