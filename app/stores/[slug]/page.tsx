import { notFound } from "next/navigation";
import StoreHero from "@/components/store-detail/StoreHero";

import { STORES } from "@/data/data";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return STORES.map((store) => ({
    slug: store.slug,
  }));
}

export default function StorePage({
  params,
}: Props) {
  const store = STORES.find(
    (store) => store.slug === params.slug
  );

  if (!store) {
    notFound();
  }

  return (
    <main>

      <StoreHero store={store} />

      <p>{store.description}</p>

    </main>
  );
}