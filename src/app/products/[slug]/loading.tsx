import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <div className="bg-ink pb-7 pt-32 md:pt-36">
        <div className="container-page">
          <Skeleton className="h-3 w-64 bg-chalk/10" />
        </div>
      </div>
      <section className="container-page grid gap-10 py-12 lg:grid-cols-2 lg:gap-16 lg:py-16">
        <div className="flex gap-5">
          <div className="hidden flex-col gap-3 lg:flex">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-20 w-20" />
            ))}
          </div>
          <Skeleton className="aspect-[4/5] flex-1" />
        </div>
        <div className="flex flex-col gap-5">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-12 w-48" />
          <div className="mt-4 flex gap-3">
            <Skeleton className="h-14 flex-1" />
            <Skeleton className="h-14 w-40" />
          </div>
        </div>
      </section>
    </>
  );
}
