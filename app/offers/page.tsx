import { OFFERS } from "@/data/data";
import { OffersPage } from "@/components/offers/OffersPage";

export default function OffersRoute() {
  return <OffersPage offers={OFFERS} />;
}