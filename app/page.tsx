import AcmeLogo from '@/app/ui/acme-logo';
import CallProducts from '@/app/ui/products/call-products';
import ClientOnlyComponent from '@/app/ui/components/client-only-component';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 gap-1">
      <div className="flex justify-between items-end h-20 shrink-0 rounded-lg bg-teal-500 p-4 md:h-40">
        <AcmeLogo />
        <ClientOnlyComponent />
      </div>
      <div className="bg-gray-50 flex items-center justify-center rounded-lg">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            <CallProducts />
          </div>
        </div>
      </div>
    </main>
  );
}
