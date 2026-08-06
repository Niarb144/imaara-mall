import { notFound } from "next/navigation";
import StoreHero from "@/components/store-detail/StoreHero";
import StoreDescription from "@/components/store-detail/StoreDescription";
import StoreInformation from "@/components/store-detail/StoreInformation";
import StoreGallery from "@/components/store-detail/StoreGallery";
import RelatedStores from "@/components/store-detail/RelatedStores";

import { STORES } from "@/data/data";
import { Store } from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return STORES.map((store) => ({
    slug: store.slug,
  }));
}

export default async function StorePage({
  params,
}: Props) {
  const { slug } = await params;

  const store = STORES.find(
    (store) => store.slug === slug
  );

  if (!store) {
    notFound();
  }

  return (
    <main>

      <StoreHero store={store} />
      <StoreDescription store={store}>
        <StoreInformation store={store} />
      </StoreDescription>
      <StoreGallery store={store} />
      <RelatedStores store={store} />

    </main>
  );
}