import { Skeleton } from "@/components/ui/skeleton";
import { ProductShopSkeleton } from "@/components/shop/product-shop";

export default function Loading() {
  return (
    <>
      <div className="bg-ink pb-20 pt-40">
        <div className="container-page flex flex-col gap-5">
          <Skeleton className="h-3 w-48 bg-chalk/10" />
          <Skeleton className="h-16 w-2/3 bg-chalk/10" />
          <Skeleton className="h-5 w-1/2 bg-chalk/10" />
        </div>
      </div>
      <ProductShopSkeleton />
    </>
  );
}
