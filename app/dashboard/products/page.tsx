import CallTableProducts from "@/app/ui/products/call-table-products";

export default function ProductsPage() {
  return (
    <div className="bg-gray-50 flex items-center justify-center rounded-lg">
      <div className="container mx-auto p-4">
        <CallTableProducts />
      </div>
    </div>
  );
}